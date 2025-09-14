const router = require("express").Router();
const orderController = require("../controllers/orderController");

// listar
router.get("/", orderController.listOrders);

// criar
router.post("/", orderController.createOrder);

// atualizar (status, nome, mesa — parcial)
router.put("/:id", orderController.updateOrder);

// deletar
router.delete("/:id", orderController.deleteOrder);

module.exports = router;