// src/controllers/orderController.js
const { Op } = require("sequelize");
const { Order, OrderItem, Customer, Product } = require("../models");

/**
 * GET /api/orders
 * Lista pedidos incluindo cliente e itens com produtos.
 */
exports.listOrders = async (_req, res) => {
  try {
    const rows = await Order.findAll({
      order: [["created_at", "DESC"]],
      include: [
        {
          model: Customer,
          as: "customer",
          attributes: ["customer_id", "name", "table_number"],
        },
        {
          model: OrderItem,
          as: "orderItems",
          include: [
            {
              model: Product,
              as: "product",
              attributes: ["product_id", "name"],
            },
          ],
        },
      ],
    });
    return res.json(rows);
  } catch (err) {
    console.error("GET /orders error:", err);
    return res.status(500).json({ message: "Erro ao listar pedidos", error: String(err?.message || err) });
  }
};

/**
 * POST /api/orders
 * Cria pedido a partir do payload do front (customer, table_number, items[])
 */
exports.createOrder = async (req, res) => {
  try {
    const {
      customer, table_number, table, items = [], total_price, total_cents, status,
    } = req.body || {};

    console.log("🔍 ITEMS RECEBIDOS DO FRONT:", JSON.stringify(items, null, 2));

    const name = customer?.name ?? req.body?.name ?? "";
    const tableValue = table_number ?? table ?? null;

    const createdCustomer = await Customer.create({
      name: name ?? "",
      table_number: tableValue ?? null,
    });

    const totalCentsCalculated = Array.isArray(items)
      ? items.reduce((sum, it) => {
          const unit = Number(it.unit_price_cents ?? it.unitPriceCents ?? 0);
          const quantity = Number(it.quantity ?? it.qty ?? 0);
          return sum + unit * quantity;
        }, 0)
      : 0;

    const order = await Order.create({
      total_price: (totalCentsCalculated / 100).toFixed(2),
      status: status ?? "pending",
      customer_id: createdCustomer.customer_id,
      cart_id: null,
    });

    if (Array.isArray(items) && items.length > 0) {
      const payloadItems = items.map((it) => ({
        order_id: order.order_id,
        product_id: it.product_id ?? it.productId,
        quantity: Number(it.quantity ?? it.qty ?? 0),
        unit_price_cents: Number(it.unit_price_cents ?? it.unitPriceCents ?? 0),
        total_cents:
          Number(it.unit_price_cents ?? it.unitPriceCents ?? 0) * Number(it.quantity ?? it.qty ?? 0),
        size: it.size ?? null,
      }));
      await OrderItem.bulkCreate(payloadItems);
    }

    const saved = await Order.findOne({
      where: { order_id: order.order_id },
      include: [
        {
          model: Customer,
          as: "customer",
          attributes: ["customer_id", "name", "table_number"],
        },
        {
          model: OrderItem,
          as: "orderItems",
          include: [
            {
              model: Product,
              as: "product",
              attributes: ["product_id", "name"],
            },
          ],
        },
      ],
    });

    return res.status(201).json({ ok: true, order: saved });
  } catch (err) {
    console.error("POST /orders error:", err);
    return res.status(400).json({ message: "Bad request", error: String(err?.message || err) });
  }
};

/**
 * PUT /api/orders/:id
 * Atualiza status e/ou dados do cliente (nome/mesa) de forma parcial.
 */
exports.updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const { status, customer, table, table_number, name } = req.body || {};

    if (status) {
      await Order.update({ status }, { where: { order_id: id } });
    }

    const newName = customer?.name ?? name;
    const newTable = table_number ?? table;

    if (newName !== undefined || newTable !== undefined) {
      const order = await Order.findOne({ where: { order_id: id } });
      let customerId = order?.customer_id;

      if (!customerId) {
        const created = await Customer.create({
          name: newName ?? "",
          table_number: newTable ?? null,
        });
        customerId = created.customer_id;
        await Order.update({ customer_id: customerId }, { where: { order_id: id } });
      } else {
        await Customer.update(
          {
            ...(newName !== undefined ? { name: newName } : {}),
            ...(newTable !== undefined ? { table_number: newTable } : {}),
          },
          { where: { customer_id: customerId } }
        );
      }
    }

    const updated = await Order.findOne({ where: { order_id: id } });
    return res.json({ ok: true, order: updated });
  } catch (err) {
    console.error("PUT /orders/:id error:", err);
    return res.status(400).json({ message: "Bad request", error: String(err?.message || err) });
  }
};

/**
 * DELETE /api/orders/:id
 * Remove pedido e itens.
 */
exports.deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    await OrderItem.destroy({ where: { order_id: id } });
    await Order.destroy({ where: { order_id: id } });
    return res.json({ ok: true });
  } catch (err) {
    console.error("DELETE /orders/:id error:", err);
    return res.status(400).json({ message: "Bad request", error: String(err?.message || err) });
  }
};
