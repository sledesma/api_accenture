const express = require('express');

const vistasController = require('../controllers/vistas')

const router = express.Router();

router.get('/vistas/:id', vistasController.getView)


module.exports = router;