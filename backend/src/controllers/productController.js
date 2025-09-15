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
    const products = await Product.findAll({ order: [['product_id', 'DESC']] });
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

    const payload = {
      name: body.name,
      description: body.description ?? '',
      category: body.category,
      uniquePrice,
      sizes: parseSizes(body.sizes),
      stock_qty: Number(body.stock_qty ?? 0),
      active: body.active == null ? 1 : Number(body.active),
      imageUrl,
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

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};