// controllers/customerController.js
const { Customer } = require('../models');

function sqlMsg(err) {
  return (
    err?.errors?.[0]?.message ||
    err?.original?.sqlMessage ||
    err?.message ||
    'Erro inesperado.'
  );
}

async function createCustomer(req, res) {
  try {
    const { name, table_number, phone, address } = req.body;

    if (!name || !String(name).trim()) {
      return res.status(400).json({ message: 'Nome é obrigatório.' });
    }

    const created = await Customer.create({
  name: String(name).trim(),
  table_number: table_number ?? null,
  phone: phone ?? null,
  address: address ?? null,  // OK, a coluna existe
});

    return res.status(201).json(created);
  } catch (error) {
    console.error('ERRO createCustomer =>', sqlMsg(error));
    return res.status(500).json({ message: 'Erro ao criar cliente.', error: sqlMsg(error) });
  }
}

async function getAllCustomers(req, res) {
  try {
    const customers = await Customer.findAll();
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar clientes.', error: sqlMsg(error) });
  }
}

async function getCustomerById(req, res) {
  try {
    const c = await Customer.findByPk(req.params.id);
    if (!c) return res.status(404).json({ message: 'Cliente não encontrado.' });
    return res.status(200).json(c);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar cliente.', error: sqlMsg(error) });
  }
}

async function updateCustomer(req, res) {
  try {
    const id = Number(req.params.id);
    const [updatedRows] = await Customer.update(req.body, { where: { customer_id: id } });
    if (!updatedRows) return res.status(404).json({ message: 'Cliente não encontrado para atualização.' });
    const updated = await Customer.findByPk(id);
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar cliente.', error: sqlMsg(error) });
  }
}

async function deleteCustomer(req, res) {
  try {
    const id = Number(req.params.id);
    const deletedRows = await Customer.destroy({ where: { customer_id: id } });
    if (!deletedRows) return res.status(404).json({ message: 'Cliente não encontrado para exclusão.' });
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar cliente.', error: sqlMsg(error) });
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};