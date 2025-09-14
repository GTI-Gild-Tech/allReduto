const { Product } = require('../models');

// Obtém todos os produtos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar produtos.', error: error.message });
  }
};

// Obtém um produto por ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produto.', error: error.message });
  }
};

// Cria um novo produto
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto.', error: error.message });
  }
};

// Atualiza um produto por ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updatedRows] = await Product.update(req.body, {
      where: { product_id: id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Produto não encontrado para atualização.' });
    }

    const updatedProduct = await Product.findByPk(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto.', error: error.message });
  }
};

// Deleta um produto por ID
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!id || id === 'undefined') {
    return res.status(400).json({ 
      message: 'ID do produto é inválido ou não fornecido.' 
    });
  }

  try {
    const deletedRows = await Product.destroy({
      where: { product_id: id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Produto não encontrado para exclusão.' });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto.', error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};