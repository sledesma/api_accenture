const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
  res.send('Estas en categorias');
});


module.exports = router;