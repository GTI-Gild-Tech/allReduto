// src/controllers/productController.js
// src/controllers/productController.js
const { Product } = require('../models');

// ---------- helpers ----------
const parseSizes = (val) => {
  if (val == null || val === '') return [];
  if (Array.isArray(val)) return val;
  if (typeof val === 'string') {
    try { return JSON.parse(val); } catch { return []; }
  }
  return [];
};

// somente aceita caminhos salvos localmente pela API (/uploads/...)
const isValidStoredPath = (u) =>
  typeof u === 'string' &&
  u.length <= 255 &&
  (u.startsWith('/uploads/') || u.startsWith('uploads/'));

// ---------- CRUD ----------
const getAllProducts = async (_req, res) => {
  try {
    const products = await Product.findAll({ 
      order: [
        ['category', 'ASC'],
        ['order', 'ASC'],
        ['product_id', 'DESC']
      ] 
    });
    return res.status(200).json(products);
  } catch (err) {
    console.error('GET /api/products error:', err?.original?.sqlMessage || err);
    return res
      .status(500)
      .json({ message: 'Erro ao listar produtos.', error: err?.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Produto não encontrado.' });
    return res.status(200).json(product);
  } catch (err) {
    console.error('GET /api/products/:id error:', err?.original?.sqlMessage || err);
    return res
      .status(500)
      .json({ message: 'Erro ao buscar produto.', error: err?.message });
  }
};

const createProduct = async (req, res) => {

  console.log('[createProduct] CT:', req.headers['content-type']);
console.log('[createProduct] has file?', !!req.file, req.file && {
  fieldname: req.file.fieldname,
  originalname: req.file.originalname,
  filename: req.file.filename,
  size: req.file.size,
});
console.log('[createProduct] body keys:', Object.keys(req.body));
  try {
    const { body, file } = req;

    // campos obrigatórios no seu schema
    if (!body?.name)     return res.status(400).json({ message: "Campo 'name' é obrigatório." });
    if (!body?.category) return res.status(400).json({ message: "Campo 'category' é obrigatório." });

    // uniquePrice é NOT NULL na tabela -> garanta um valor
    const uniquePrice = (body.uniquePrice ?? '').toString().trim() || '0.00';

    // aceita somente caminho salvo localmente (/uploads/...) ou nulo
    const imageUrl = file
      ? `/uploads/${file.filename}`
      : (isValidStoredPath(body.imageUrl) ? body.imageUrl : null);

    // Determinar a ordem: se não especificada, usar a próxima disponível na categoria
    let order = body.order != null ? Number(body.order) : null;
    if (order === null) {
      const maxOrderProduct = await Product.findOne({
        where: { category: body.category },
        order: [['order', 'DESC']]
      });
      order = maxOrderProduct ? (maxOrderProduct.order || 0) + 1 : 0;
    }

    const payload = {
      name: body.name,
      description: body.description ?? '',
      category: body.category,
      uniquePrice,
      sizes: parseSizes(body.sizes),
      stock_qty: Number(body.stock_qty ?? 0),
      active: body.active == null ? 1 : Number(body.active),
      imageUrl,
      order,
    };

    const created = await Product.create(payload);
    return res.status(201).json(created);
  } catch (err) {
    console.error('POST /api/products error:', err?.original?.sqlMessage || err);
    return res.status(500).json({
      message: 'Erro ao criar produto.',
      error: err?.original?.sqlMessage || err?.message || String(err),
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body, file } = req;

    const data = {
      ...(body.name != null        ? { name: body.name } : {}),
      ...(body.description != null ? { description: body.description } : {}),
      ...(body.category != null    ? { category: body.category } : {}),
      ...(body.uniquePrice != null ? { uniquePrice: String(body.uniquePrice) } : {}),
      ...(body.sizes != null       ? { sizes: parseSizes(body.sizes) } : {}),
      ...(body.stock_qty != null   ? { stock_qty: Number(body.stock_qty) } : {}),
      ...(body.active != null      ? { active: Number(body.active) } : {}),
      ...(body.order != null       ? { order: Number(body.order) } : {}),
      // se vier arquivo, troca; se não, só aceita caminho curto de /uploads
      ...(file
        ? { imageUrl: `/uploads/${file.filename}` }
        : (isValidStoredPath(body.imageUrl) ? { imageUrl: body.imageUrl } : {})),
    };

    const [updatedRows] = await Product.update(data, { where: { product_id: id } });
    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Produto não encontrado para atualização.' });
    }
    const updated = await Product.findByPk(id);
    return res.status(200).json(updated);
  } catch (err) {
    console.error('PUT /api/products/:id error:', err?.original?.sqlMessage || err);
    return res.status(500).json({
      message: 'Erro ao atualizar produto.',
      error: err?.original?.sqlMessage || err?.message || String(err),
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { product_id: id } });
    if (!deleted) return res.status(404).json({ message: 'Produto não encontrado.' });
    return res.status(204).send();
  } catch (err) {
    console.error('DELETE /api/products/:id error:', err?.original?.sqlMessage || err);
    return res
      .status(500)
      .json({ message: 'Erro ao excluir produto.', error: err?.message });
  }
};

const reorderProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, newOrder } = req.body;

    console.log('[reorderProduct] id:', id, 'category:', category, 'newOrder:', newOrder);

    if (category == null || newOrder == null) {
      return res.status(400).json({ 
        message: 'Campos "category" e "newOrder" são obrigatórios.' 
      });
    }

const reorderProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let { category, newOrder } = req.body;

    console.log('[reorderProduct] raw body =', req.body);

    // garante que newOrder seja número
    newOrder = Number(newOrder);
    if (!Number.isFinite(newOrder)) {
      return res.status(400).json({
        message: 'Campo "newOrder" é obrigatório e deve ser numérico.',
      });
    }

    // Buscar o produto
    const product = await Product.findByPk(id);
    if (!product) {
      console.log('[reorderProduct] produto não encontrado, id =', id);
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    // Se categoria não vier no body, usa a do próprio produto
    if (category == null || category === '') {
      category = product.category;
      console.log('[reorderProduct] category não veio no body, usando do produto:', category);
    }

    if (category == null || category === '') {
      return res.status(400).json({
        message: 'Campo "category" é obrigatório e não foi possível inferir do produto.',
      });
    }

    console.log('[reorderProduct] id:', id, 'category:', category, 'newOrder:', newOrder);

    // Buscar todos os produtos da categoria ordenados
    const categoryProducts = await Product.findAll({
      where: { category },
      order: [['order', 'ASC'], ['product_id', 'ASC']],
    });

    console.log('[reorderProduct] Found', categoryProducts.length, 'products in category');

    // Encontrar o índice atual do produto
    const currentIndex = categoryProducts.findIndex(
      (p) => Number(p.product_id) === Number(id)
    );

    console.log('[reorderProduct] currentIndex =', currentIndex);

    if (currentIndex === -1) {
      return res.status(404).json({
        message: 'Produto não encontrado na lista da categoria.',
        debug: { id, category },
      });
    }

    // Se a posição não mudou, retornar sem fazer nada
    if (currentIndex === newOrder) {
      console.log('[reorderProduct] No change in position');
      return res.status(200).json(product);
    }

    // Remover o produto da posição atual
    const [movedProduct] = categoryProducts.splice(currentIndex, 1);

    // Garante que newOrder esteja no intervalo do array
    const safeIndex = Math.max(0, Math.min(newOrder, categoryProducts.length));
    console.log('[reorderProduct] moving from', currentIndex, 'to', safeIndex);

    // Inserir na nova posição
    categoryProducts.splice(safeIndex, 0, movedProduct);

    // Atualizar a ordem de todos os produtos da categoria
    const updates = categoryProducts.map((p, index) =>
      Product.update({ order: index }, { where: { product_id: p.product_id } })
    );

    await Promise.all(updates);

    console.log('[reorderProduct] Updated', updates.length, 'products');

    // Retornar o produto atualizado
    const updatedProduct = await Product.findByPk(id);
    return res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(
      'PATCH /api/products/:id/reorder error:',
      err?.original?.sqlMessage || err
    );
    return res.status(500).json({
      message: 'Erro ao reordenar produto.',
      error: err?.original?.sqlMessage || err?.message || String(err),
    });
  }
};

    // Buscar o produto
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    // Buscar todos os produtos da categoria ordenados
    const categoryProducts = await Product.findAll({
      where: { category },
      order: [['order', 'ASC'], ['product_id', 'ASC']]
    });

    console.log('[reorderProduct] Found', categoryProducts.length, 'products in category');

    // Encontrar o índice atual do produto
    const currentIndex = categoryProducts.findIndex(p => p.product_id === parseInt(id));
    
    if (currentIndex === -1) {
      return res.status(404).json({ message: 'Produto não encontrado na categoria.' });
    }

    // Se a posição não mudou, retornar sem fazer nada
    if (currentIndex === newOrder) {
      console.log('[reorderProduct] No change in position');
      return res.status(200).json(product);
    }

    // Remover o produto da posição atual
    const [movedProduct] = categoryProducts.splice(currentIndex, 1);
    
    // Inserir na nova posição
    categoryProducts.splice(newOrder, 0, movedProduct);

    // Atualizar a ordem de todos os produtos da categoria em uma transação
    const updates = categoryProducts.map((p, index) => {
      return Product.update(
        { order: index },
        { where: { product_id: p.product_id } }
      );
    });

    await Promise.all(updates);

    console.log('[reorderProduct] Updated', updates.length, 'products');

    // Retornar o produto atualizado
    const updatedProduct = await Product.findByPk(id);
    return res.status(200).json(updatedProduct);
  } catch (err) {
    console.error('PATCH /api/products/:id/reorder error:', err?.original?.sqlMessage || err);
    return res.status(500).json({
      message: 'Erro ao reordenar produto.',
      error: err?.original?.sqlMessage || err?.message || String(err),
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  reorderProduct,
};
