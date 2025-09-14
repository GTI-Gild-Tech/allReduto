const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController');

// Rota para listar todos os itens de pedido
router.get('/', orderItemController.getAllOrderItems);

// Rota para buscar um item de pedido por ID
router.get('/:id', orderItemController.getOrderItemById);

// Rota para criar um novo item de pedido
router.post('/', orderItemController.createOrderItem);

// Rota para atualizar um item de pedido por ID
router.put('/:id', orderItemController.updateOrderItem);

// Rota para deletar um item de pedido por ID
router.delete('/:id', orderItemController.deleteOrderItem);

module.exports = router;