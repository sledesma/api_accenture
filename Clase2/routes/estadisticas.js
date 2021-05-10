const express = require('express');

const estadisticasController = require('../controllers/estadisticas');

const router = express.Router();

router.get('/estadisticas/:id', estadisticasController.getStats);

module.exports = router;