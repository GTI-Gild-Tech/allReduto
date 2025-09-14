// src/routes/index.js
const { Router } = require('express');

const orderRoutes = require('./orderRoutes');
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');
const cartRoutes = require('./cartRoutes');
const customerRoutes = require('./customerRoutes');
const userRoutes = require('./userRoutes');

const router = Router();

// Cada linha abaixo vira /api/<prefixo>
router.use('/orders', orderRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/carts', cartRoutes);
router.use('/customers', customerRoutes);
router.use('/users', userRoutes);

module.exports = router;