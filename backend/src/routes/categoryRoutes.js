const router = require("express").Router();
const { Category } = require("../models");
const { Op } = require("sequelize");

// GET /api/categories (lista)
router.get("/", async (_req, res) => {
  try {
    const rows = await Category.findAll({
      order: [["reorder", "ASC"], ["created_at", "DESC"]],
      attributes: ["category_id", "name", "slug", "reorder", "created_at", "updated_at"],
    });
    res.json(rows);
  } catch (err) {
    console.error("GET /categories error:", err);
    res.status(500).json({ message: "Erro ao listar categorias" });
  }
});

// POST /api/categories (cria)
router.post("/", async (req, res) => {
  try {
    const name = String(req.body?.name || "").trim();
    if (!name) return res.status(400).json({ message: "Informe o nome" });

    // slug simples
    const slug = name
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    // evita duplicar slug
    const exists = await Category.findOne({ where: { slug } });
    if (exists) return res.status(409).json({ message: "Categoria já existe" });

    // Buscar o maior valor de order existente e adicionar 1
    const maxOrderResult = await Category.findOne({
      attributes: [[Category.sequelize.fn('MAX', Category.sequelize.col('reorder')), 'maxOrder']],
      raw: true
    });
    const nextOrder = (maxOrderResult?.maxOrder ?? -1) + 1;

    const created = await Category.create({ name, slug, order: nextOrder });
    res.status(201).json(created);
  } catch (err) {
    console.error("POST /categories error:", err);
    res.status(500).json({ message: "Erro ao criar categoria" });
  }
});

// PUT /api/categories/:id (renomeia)
router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const name = String(req.body?.name || "").trim();
    if (!id || !Number.isFinite(id)) return res.status(400).json({ message: "id inválido" });
    if (!name) return res.status(400).json({ message: "Informe o nome" });

    const slug = name
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    await Category.update({ name, slug }, { where: { category_id: id } });
    const updated = await Category.findByPk(id);
    if (!updated) return res.status(404).json({ message: "Categoria não encontrada" });
    res.json(updated);
  } catch (err) {
    console.error("PUT /categories/:id error:", err);
    res.status(500).json({ message: "Erro ao atualizar categoria" });
  }
});

// DELETE /api/categories/:id (deleta por ID)
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id || !Number.isFinite(id)) return res.status(400).json({ message: "id inválido" });

    // Buscar a categoria antes de deletar para saber seu order
    const categoryToDelete = await Category.findByPk(id);
    if (!categoryToDelete) return res.status(404).json({ message: "Categoria não encontrada" });

    const deletedOrder = categoryToDelete.order || 0;

    // Deletar a categoria
    const deleted = await Category.destroy({ where: { category_id: id } });
    if (!deleted) return res.status(404).json({ message: "Categoria não encontrada" });

    // Reajustar os índices das categorias subsequentes (decrementar)
    await Category.update(
      { order: Category.sequelize.literal('`reorder` - 1') },
      {
        where: {
          order: {
            [Op.gt]: deletedOrder
          }
        }
      }
    );

    res.status(204).end();
  } catch (err) {
    console.error("DELETE /categories/:id error:", err);
    res.status(500).json({ message: "Erro ao deletar categoria" });
  }
});

// PATCH /api/categories/:id/reorder (reordena categoria)
router.patch("/:id/reorder", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { newOrder } = req.body;

    console.log('[REORDER] Iniciando reordenação:', { id, newOrder });

    if (!id || !Number.isFinite(id)) {
      return res.status(400).json({ message: "id inválido" });
    }

    if (typeof newOrder !== 'number') {
      return res.status(400).json({ message: 'newOrder deve ser um número.' });
    }

    // Buscar a categoria que está sendo movida
    const categoryToMove = await Category.findByPk(id);
    if (!categoryToMove) {
      return res.status(404).json({ message: 'Categoria não encontrada.' });
    }

    const oldOrder = categoryToMove.order || 0;
    console.log('[REORDER] Categoria:', categoryToMove.name, 'oldOrder:', oldOrder, 'newOrder:', newOrder);

    // Se a posição não mudou, não fazer nada
    if (oldOrder === newOrder) {
      console.log('[REORDER] Posição não mudou, retornando categoria sem alterações');
      return res.status(200).json({ 
        message: 'Categoria já está na posição desejada.', 
        category: categoryToMove 
      });
    }

    // Atualizar a ordem das categorias afetadas
    if (newOrder > oldOrder) {
      // Movendo para baixo: decrementar as categorias entre oldOrder e newOrder
      console.log('[REORDER] Movendo para baixo: decrementando categorias entre', oldOrder + 1, 'e', newOrder);
      await Category.update(
        { order: Category.sequelize.literal('`reorder` - 1') },
        {
          where: {
            order: {
              [Op.gt]: oldOrder,
              [Op.lte]: newOrder
            }
          }
        }
      );
    } else if (newOrder < oldOrder) {
      // Movendo para cima: incrementar as categorias entre newOrder e oldOrder
      console.log('[REORDER] Movendo para cima: incrementando categorias entre', newOrder, 'e', oldOrder - 1);
      await Category.update(
        { order: Category.sequelize.literal('`reorder` + 1') },
        {
          where: {
            order: {
              [Op.gte]: newOrder,
              [Op.lt]: oldOrder
            }
          }
        }
      );
    }

    // Atualizar a ordem da categoria movida
    console.log('[REORDER] Atualizando categoria', categoryToMove.name, 'para order:', newOrder);
    await Category.update(
      { order: newOrder },
      { where: { category_id: id } }
    );

    const updatedCategory = await Category.findByPk(id);
    
    // Log do estado final
    const allCategories = await Category.findAll({
      order: [['reorder', 'ASC']],
      attributes: ['category_id', 'name', 'reorder']
    });
    console.log('[REORDER] Estado final das categorias:');
    console.table(allCategories.map(c => ({ id: c.category_id, name: c.name, order: c.order })));

    return res.status(200).json({ 
      message: 'Categoria reordenada com sucesso.', 
      category: updatedCategory 
    });
  } catch (err) {
    console.error("PATCH /categories/:id/reorder error:", err);
    res.status(500).json({ message: "Erro ao reordenar categoria" });
  }
});

module.exports = router;

