const router = require("express").Router();
const { Category } = require("../models");
const { Op } = require("sequelize");

// GET /api/categories (lista)
router.get("/", async (_req, res) => {
  try {
    const rows = await Category.findAll({
      order: [["created_at", "DESC"]],
      attributes: ["category_id", "name", "slug", "created_at", "updated_at"],
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

    const created = await Category.create({ name, slug });
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

    const deleted = await Category.destroy({ where: { category_id: id } });
    if (!deleted) return res.status(404).json({ message: "Categoria não encontrada" });

    res.status(204).end();
  } catch (err) {
    console.error("DELETE /categories/:id error:", err);
    res.status(500).json({ message: "Erro ao deletar categoria" });
  }
});

module.exports = router;