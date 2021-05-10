const express = require('express');

const productosController = require('../controllers/productos');

const router = express.Router();

router.post("/productos", productosController.postProductos);

router.delete("/productos/:id", productosController.deleteProductos);

router.put("/productos/:id", productosController.editProductos);

router.get('/productos/:id', productosController.getOneProductos);

router.get('/productos', productosController.getAllProductos);

module.exports = router;