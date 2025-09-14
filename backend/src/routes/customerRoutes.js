const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Rota para listar todos os clientes e criar um novo
router.get('/', customerController.getAllCustomers);
router.post('/', customerController.createCustomer);

// Rota para buscar, atualizar e deletar um cliente por ID
router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;