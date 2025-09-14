const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Rota para listar todos os carrinhos e criar um novo
router.get('/', cartController.getAllCarts);
router.post('/', cartController.createCart);

// Rota para buscar, atualizar e deletar um carrinho por ID
router.get('/:id', cartController.getCartById);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);

module.exports = router;