const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /api/users - Listar todos usuários
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Buscar usuário por ID
router.get('/:id', userController.getUserById);

// POST /api/users - Criar novo usuário
router.post('/', userController.createUser);

module.exports = router;