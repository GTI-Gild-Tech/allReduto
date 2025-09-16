const { OrderItem, Order, Product } = require('../models');

/**
 * GET /api/order_items
 * Suporta filtros opcionais: ?order_id=..., ?product_id=..., ?size=...
 */
async function getAllOrderItems(req, res) {
  try {
    const where = {};
    if (req.query.order_id) where.order_id = Number(req.query.order_id);
    if (req.query.product_id) where.product_id = Number(req.query.product_id);
    if (req.query.size) where.size = String(req.query.size);

    const items = await OrderItem.findAll({
      where,
      include: [
        { model: Order, as: 'order' },
        { model: Product, as: 'product' },
      ],
      order: [['created_at', 'DESC']],
    });

    return res.status(200).json(items);
  } catch (error) {
    const msg =
      error?.errors?.[0]?.message ||
      error?.original?.sqlMessage ||
      error?.message ||
      'Erro ao listar itens de pedido.';
    return res.status(500).json({ message: 'Erro ao listar itens de pedido.', error: msg });
  }
}

/**
 * GET /api/order_items/:id
 */
async function getOrderItemById(req, res) {
  try {
    const id = Number(req.params.id);
    const item = await OrderItem.findByPk(id, {
      include: [
        { model: Order, as: 'order' },
        { model: Product, as: 'product' },
      ],
    });

    if (!item) return res.status(404).json({ message: 'Item de pedido não encontrado.' });
    return res.status(200).json(item);
  } catch (error) {
    const msg =
      error?.errors?.[0]?.message ||
      error?.original?.sqlMessage ||
      error?.message ||
      'Erro ao buscar item de pedido.';
    return res.status(500).json({ message: 'Erro ao buscar item de pedido.', error: msg });
  }
}

/**
 * POST /api/order_items
 * Body: { order_id, product_id, quantity, unit_price_cents, size? }
 * OBS: NÃO envie total_cents — coluna gerada no DB.
 */
async function createOrderItem(req, res) {
  try {
    const { order_id, product_id, quantity, unit_price_cents, size } = req.body;

    // validações simples
    if (!order_id || !product_id) {
      return res.status(400).json({ message: 'order_id e product_id são obrigatórios.' });
    }
    if (quantity == null || Number(quantity) <= 0) {
      return res.status(400).json({ message: 'quantity deve ser > 0.' });
    }
    if (unit_price_cents == null || Number(unit_price_cents) < 0) {
      return res.status(400).json({ message: 'unit_price_cents deve ser >= 0.' });
    }

    // garante que FKs existem (evita 500 de constraint)
    const [order, product] = await Promise.all([
      Order.findByPk(order_id),
      Product.findByPk(product_id),
    ]);
    if (!order) return res.status(404).json({ message: 'order_id inexistente.' });
    if (!product) return res.status(404).json({ message: 'product_id inexistente.' });

    const created = await OrderItem.create({
      order_id: Number(order_id),
      product_id: Number(product_id),
      quantity: Number(quantity),
      unit_price_cents: Number(unit_price_cents),
      size: size == null || size === '' ? null : String(size),
    });

    return res.status(201).json(created);
  } catch (error) {
    const msg =
      error?.errors?.[0]?.message ||
      error?.original?.sqlMessage ||
      error?.message ||
      'Erro ao criar item de pedido.';
    return res.status(500).json({ message: 'Erro ao criar item de pedido.', error: msg });
  }
}

/**
 * PUT /api/order_items/:id
 * Body permitido: { quantity?, unit_price_cents?, product_id?, size? }
 * (Não atualize order_id aqui — se precisar, crie outro item.)
 */
async function updateOrderItem(req, res) {
  try {
    const id = Number(req.params.id);
    const { quantity, unit_price_cents, product_id, size } = req.body;

    const item = await OrderItem.findByPk(id);
    if (!item) return res.status(404).json({ message: 'Item de pedido não encontrado.' });

    const patch = {};
    if (quantity != null) {
      if (Number(quantity) <= 0) return res.status(400).json({ message: 'quantity deve ser > 0.' });
      patch.quantity = Number(quantity);
    }
    if (unit_price_cents != null) {
      if (Number(unit_price_cents) < 0)
        return res.status(400).json({ message: 'unit_price_cents deve ser >= 0.' });
      patch.unit_price_cents = Number(unit_price_cents);
    }
    if (product_id != null) {
      const prod = await Product.findByPk(product_id);
      if (!prod) return res.status(404).json({ message: 'product_id inexistente.' });
      patch.product_id = Number(product_id);
    }
    if (size !== undefined) {
      // permite limpar (string vazia -> null)
      patch.size = size === '' ? null : String(size);
    }

    await item.update(patch);
    // total_cents é virtual/gerado no DB; não precisa atualizar manualmente
    const fresh = await OrderItem.findByPk(id, {
      include: [
        { model: Order, as: 'order' },
        { model: Product, as: 'product' },
      ],
    });

    return res.status(200).json(fresh);
  } catch (error) {
    const msg =
      error?.errors?.[0]?.message ||
      error?.original?.sqlMessage ||
      error?.message ||
      'Erro ao atualizar item de pedido.';
    return res.status(500).json({ message: 'Erro ao atualizar item de pedido.', error: msg });
  }
}

/**
 * DELETE /api/order_items/:id
 */
async function deleteOrderItem(req, res) {
  try {
    const id = Number(req.params.id);
    const deleted = await OrderItem.destroy({ where: { order_item_id: id } });
    if (!deleted) return res.status(404).json({ message: 'Item de pedido não encontrado.' });
    return res.status(204).end();
  } catch (error) {
    const msg =
      error?.errors?.[0]?.message ||
      error?.original?.sqlMessage ||
      error?.message ||
      'Erro ao deletar item de pedido.';
    return res.status(500).json({ message: 'Erro ao deletar item de pedido.', error: msg });
  }
}

module.exports = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};