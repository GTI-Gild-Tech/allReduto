const { Cart, CartItem, Customer } = require('../models');

async function getAllCarts(req, res) {
  try {
    const carts = await Cart.findAll({
      include: [
        { model: Customer, as: 'customer' },
        { model: CartItem, as: 'cartItems' }
      ]
    });
    return res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar carrinhos.', error: error.message });
  }
}

async function getCartById(req, res) {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [
        { model: Customer, as: 'customer' },
        { model: CartItem, as: 'cartItems' }
      ]
    });

    if (!cart) {
      return res.status(404).json({ message: 'Carrinho não encontrado.' });
    }

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar carrinho.', error: error.message });
  }
}

async function createCart(req, res) {
  try {
    const newCart = await Cart.create(req.body);
    return res.status(201).json(newCart);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar carrinho.', error: error.message });
  }
}

async function updateCart(req, res) {
  try {
    const [updatedRows] = await Cart.update(req.body, {
      where: { cart_id: req.params.id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Carrinho não encontrado para atualização.' });
    }

    const updatedCart = await Cart.findByPk(req.params.id);
    return res.status(200).json(updatedCart);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar carrinho.', error: error.message });
  }
}

async function deleteCart(req, res) {
  try {
    const deletedRows = await Cart.destroy({
      where: { cart_id: req.params.id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Carrinho não encontrado para exclusão.' });
    }

    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar carrinho.', error: error.message });
  }
}

module.exports = {
  getAllCarts,
  getCartById,
  createCart,
  updateCart,
  deleteCart
};