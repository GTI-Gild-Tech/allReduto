const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController');

// Rota para listar todos os itens de carrinho e criar um novo
router.get('/', cartItemController.getAllCartItems);
router.post('/', cartItemController.createCartItem);

// Rota para buscar, atualizar e deletar um item de carrinho por ID
router.get('/:id', cartItemController.getCartItemById);
router.put('/:id', cartItemController.updateCartItem);
router.delete('/:id', cartItemController.deleteCartItem);

module.exports = router;