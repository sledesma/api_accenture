const express = require('express');

const productosRoutes = require('./productos');
const categoriasRoutes = require('./categorias');
const cambiosStockRoutes = require('./cambios_stock');

const router = express.Router();

router.use('/productos', productosRoutes);
router.use('/categorias', categoriasRoutes);
router.use('/cambios_stock', cambiosStockRoutes);

router.all('/', function(req, res){
  res.send('Bienvenido a la api')
})

module.exports = router;