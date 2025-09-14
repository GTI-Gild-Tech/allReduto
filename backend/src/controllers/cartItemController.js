const { CartItem, Product } = require('../models');

// GET /api/cart-items
exports.getAllCartItems = async (req, res) => {
  try {
    const items = await CartItem.findAll({ include: Product });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar itens do carrinho' });
  }
};

// GET /api/cart-items/:id
exports.getCartItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await CartItem.findByPk(id, { include: Product });

    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar item do carrinho' });
  }
};

// POST /api/cart-items
exports.createCartItem = async (req, res) => {
  try {
    const { cart_id, product_id, quantity } = req.body;

    if (!cart_id || !product_id || !quantity) {
      return res.status(400).json({ error: 'Campos obrigatórios: cart_id, product_id, quantity' });
    }

    const item = await CartItem.create({
      cart_id,
      product_id,
      quantity
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar item no carrinho' });
  }
};

// PUT /api/cart-items/:id
exports.updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const item = await CartItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }

    item.quantity = quantity;
    await item.save();

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar item do carrinho' });
  }
};

// DELETE /api/cart-items/:id
exports.deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await CartItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }

    await item.destroy();
    res.json({ message: 'Item removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover item do carrinho' });
  }
};