// /var/www/api/src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
console.log('[productRoutes] carregado de', __filename);

const upload = require('../config/multer');
const productController = require('../controllers/productController');

// logger simples pra depurar conteúdo da requisição
const reqLogger = (req, _res, next) => {
  console.log('[routes] CT:', req.headers['content-type']);
  next();
};

// ====================================================
// 🔍 DIAGNÓSTICO — REMOVA DEPOIS DE TESTAR
// ====================================================
router.patch('/__test', (req, res) => {
  return res.json({ ok: true, where: 'products router __test' });
});

router.get('/__stack', (req, res) => {
  const stack = router.stack
    .filter(r => r.route)
    .map(r => ({
      methods: r.route.methods,
      path: r.route.path
    }));
  return res.json(stack);
});
// ====================================================

// ✅ ADMIN (tem que vir ANTES das rotas genéricas)
router.get('/admin/products', productController.getAllProductsAdmin);

// rota específica para reordenação (antes de /:id)
router.patch('/:id/reorder', productController.reorderProduct);
router.put('/:id/reorder', productController.reorderProduct);

// rota principal
router.get('/', productController.getAllProducts);

// uploads e criação
router.post('/', reqLogger, upload.single('file'), productController.createProduct);

// atualização com upload
router.put('/:id', reqLogger, upload.single('file'), productController.updateProduct);
router.patch('/:id', reqLogger, upload.single('file'), productController.updateProduct);

// buscar por id (depois de tudo específico)
router.get('/:id', productController.getProductById);

// exclusão
router.delete('/:id', productController.deleteProduct);

module.exports = router;
