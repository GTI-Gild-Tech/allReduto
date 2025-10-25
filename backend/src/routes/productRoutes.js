const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const productController = require('../controllers/productController');

// logger simples pra depurar conteúdo da requisição
const reqLogger = (req, _res, next) => {
  console.log('[routes] CT:', req.headers['content-type']);
  next();
};

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// use o NOME DO CAMPO "file"
router.post('/', reqLogger, upload.single('file'), productController.createProduct);
router.put('/:id', reqLogger, upload.single('file'), productController.updateProduct);
router.patch('/:id', reqLogger, upload.single('file'), productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;