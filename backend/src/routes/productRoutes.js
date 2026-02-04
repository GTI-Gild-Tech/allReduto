// /var/www/api/src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
console.log('[productRoutes] carregado de', __filename);

const upload = require('../config/multer');
const productController = require('../controllers/productController');

// ====================================================
// 🔍 DIAGNÓSTICO — REMOVA DEPOIS DE TESTAR
// ====================================================
router.patch('/__test', (req, res) => {
  return res.json({ ok: true, where: '/api/products/__test (PATCH)' });
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


// logger simples pra depurar conteúdo da requisição
const reqLogger = (req, _res, next) => {
  console.log('[routes] CT:', req.headers['content-type']);
  next();
};

// ROTAS DE PRODUTOS ==================================

// rota principal
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// rota específica para reordenação (deve vir ANTES das genéricas)
router.patch('/:id/reorder', productController.reorderProduct);
router.put('/:id/reorder', productController.reorderProduct); // aceita PUT também

// uploads e criação
router.post('/', reqLogger, upload.single('file'), productController.createProduct);

// atualização com upload
router.put('/:id', reqLogger, upload.single('file'), productController.updateProduct);
router.patch('/:id', reqLogger, upload.single('file'), productController.updateProduct);

// exclusão
router.delete('/:id', productController.deleteProduct);

module.exports = router;

