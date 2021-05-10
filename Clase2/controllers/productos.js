const model = require('../models/productos');

const controller = {};

controller.postProductos = (req, res) => {
  //model.push(req.body)
	res.status(200).json({ inserted: true });
};

controller.deleteProductos = (req, res) => {
	res.status(200).json({ deleted: 10 });
};

controller.editProductos = (req, res) => {
	res.status(200).json({ 
    updated: { 
      id: 1, 
      nombre: "Celular", 
      precio: 2500 
    } 
  });
};

controller.getOneProductos = (req, res) => {
  model.getOne(req.params.id, (err, rows, fields) => {
    res.json(rows);
  })
}

controller.getAllProductos = (req, res) => {
  model.getAll((err, rows, fields) => {
    res.json(rows);
  })
};

module.exports = controller;