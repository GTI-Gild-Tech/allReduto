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

const parseBool01 = (v, defaultValue = 1) => {
  if (v == null || v === '') return defaultValue;
  if (typeof v === 'boolean') return v ? 1 : 0;
  const s = String(v).trim().toLowerCase();
  if (s === '1' || s === 'true' || s === 'yes' || s === 'on') return 1;
  if (s === '0' || s === 'false' || s === 'no' || s === 'off') return 0;
  const n = Number(s);
  if (Number.isFinite(n)) return n ? 1 : 0;
  return defaultValue;
};

// Aceita URLs completas (S3) e mantém compatibilidade com os uploads locais antigos
const isValidStoredPath = (u) =>
  typeof u === 'string' &&
  u.length <= 1024 &&
  (u.startsWith('/uploads/') || u.startsWith('uploads/') || u.startsWith('http://') || u.startsWith('https://'));

// ---------- CRUD ----------

const getAllProducts = async (_req, res) => {
  try {
    const products = await Product.findAll({
      where: { is_visible: 1 },
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

const getAllProductsAdmin = async (_req, res) => {
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
    console.error('GET /api/admin/products error:', err?.original?.sqlMessage || err);
    return res.status(500).json({ message: 'Erro ao listar produtos (admin).', error: err?.message });
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
  console.log('\n====================================================');
  console.log('🚀 [POST] INICIANDO CRIAÇÃO DE PRODUTO');
  console.log('====================================================');

  try {
    const { body, file } = req;

    console.log('\n📦 1. O QUE CHEGOU DO FRONTEND (req.body e req.file):');
    console.log('- Imagem detectada:', file ? 'Sim' : 'Não');
    console.log('- Corpo bruto:', JSON.stringify(body, null, 2));

    if (!body?.name)     return res.status(400).json({ message: "Campo 'name' é obrigatório." });
    if (!body?.category) return res.status(400).json({ message: "Campo 'category' é obrigatório." });

    const uniquePrice = (body.uniquePrice ?? '').toString().trim() || '0.00';

    const imageUrl = file
      ? (file.location ? file.location : `/uploads/${file.filename}`)
      : (isValidStoredPath(body.imageUrl) ? body.imageUrl : null);

    let order = body.order != null ? Number(body.order) : null;
    if (order === null) {
      const maxOrderProduct = await Product.findOne({
        where: { category: body.category },
        order: [['order', 'DESC']]
      });
      order = maxOrderProduct ? (maxOrderProduct.order || 0) + 1 : 0;
    }

    const is_visible = parseBool01(body.is_visible, 1);

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
      is_visible,
      temperature: body.temperature ? parseSizes(body.temperature) : null,
    };

    console.log('\n⚙️ 2. COMO O BACKEND PROCESSOU (Payload montado para o Banco):');
    console.log(JSON.stringify(payload, null, 2));

    const created = await Product.create(payload);

    console.log('\n✅ 3. O QUE FOI SALVO NO BANCO DE DADOS (Retorno do MySQL):');
    console.log(JSON.stringify(created.toJSON(), null, 2));
    console.log('====================================================\n');

    return res.status(201).json(created);
  } catch (err) {
    console.error('\n❌ ERRO AO CRIAR PRODUTO:', err?.original?.sqlMessage || err);
    return res.status(500).json({
      message: 'Erro ao criar produto.',
      error: err?.original?.sqlMessage || err?.message || String(err),
    });
  }
};

const updateProduct = async (req, res) => {
  console.log('\n====================================================');
  console.log(`📝 [PUT/PATCH] INICIANDO ATUALIZAÇÃO DO PRODUTO ID: ${req.params.id}`);
  console.log('====================================================');

  try {
    const { id } = req.params;
    const { body, file } = req;

    console.log('\n📦 1. O QUE CHEGOU DO FRONTEND:');
    console.log('- Imagem detectada:', file ? 'Sim' : 'Não');
    console.log('- Corpo bruto:', JSON.stringify(body, null, 2));

    const data = {
      ...(body.name != null        ? { name: body.name } : {}),
      ...(body.description != null ? { description: body.description } : {}),
      ...(body.category != null    ? { category: body.category } : {}),
      ...(body.uniquePrice != null ? { uniquePrice: String(body.uniquePrice) } : {}),
      ...(body.sizes != null       ? { sizes: parseSizes(body.sizes) } : {}),
      ...(body.stock_qty != null   ? { stock_qty: Number(body.stock_qty) } : {}),
      ...(body.active != null      ? { active: Number(body.active) } : {}),
      ...(body.order != null       ? { order: Number(body.order) } : {}),
      ...(body.is_visible != null  ? { is_visible: parseBool01(body.is_visible, 1) } : {}),
      
      ...(file
        ? { imageUrl: file.location ? file.location : `/uploads/${file.filename}` }
        : (isValidStoredPath(body.imageUrl) ? { imageUrl: body.imageUrl } : {})),
      
      ...(body.temperature !== undefined ? { temperature: body.temperature ? parseSizes(body.temperature) : null } : {})
    };

    console.log('\n⚙️ 2. COMO O BACKEND PROCESSOU (Payload de Atualização):');
    console.log(JSON.stringify(data, null, 2));

    const [updatedRows] = await Product.update(data, { where: { product_id: id } });
    
    if (updatedRows === 0) {
      console.log('⚠️ Nenhum produto encontrado ou nenhuma alteração efetuada.');
      return res.status(404).json({ message: 'Produto não encontrado para atualização.' });
    }
    
    const updated = await Product.findByPk(id);
    
    console.log('\n✅ 3. ESTADO ATUALIZADO NO BANCO DE DADOS:');
    console.log(JSON.stringify(updated.toJSON(), null, 2));
    console.log('====================================================\n');

    return res.status(200).json(updated);
  } catch (err) {
    console.error('\n❌ ERRO AO ATUALIZAR PRODUTO:', err?.original?.sqlMessage || err);
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
    let { category, newOrder } = req.body;

    console.log('[reorderProduct] raw body =', req.body);

    newOrder = Number(newOrder);
    if (!Number.isFinite(newOrder)) {
      return res.status(400).json({
        message: 'Campo "newOrder" é obrigatório e deve ser numérico.',
      });
    }

    const product = await Product.findByPk(id);
    if (!product) {
      console.log('[reorderProduct] produto não encontrado, id =', id);
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    if (category == null || category === '') category = product.category;
    if (category == null || category === '') {
      return res.status(400).json({
        message: 'Campo "category" é obrigatório e não foi possível inferir do produto.',
      });
    }

    const categoryProducts = await Product.findAll({
      where: { category },
      order: [['order', 'ASC'], ['product_id', 'ASC']],
    });

    const currentIndex = categoryProducts.findIndex(
      (p) => Number(p.product_id) === Number(id)
    );

    if (currentIndex === -1) {
      return res.status(404).json({
        message: 'Produto não encontrado na lista da categoria.',
        debug: { id, category },
      });
    }

    if (currentIndex === newOrder) {
      return res.status(200).json(product);
    }

    const [movedProduct] = categoryProducts.splice(currentIndex, 1);
    const safeIndex = Math.max(0, Math.min(newOrder, categoryProducts.length));
    categoryProducts.splice(safeIndex, 0, movedProduct);

    await Promise.all(
      categoryProducts.map((p, index) =>
        Product.update({ order: index }, { where: { product_id: p.product_id } })
      )
    );

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
  getAllProductsAdmin,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  reorderProduct,
};