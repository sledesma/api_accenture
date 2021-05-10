const controller = {};

controller.postProductos = (req, res) => {
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
  res.status(200).json({
    id: 1,
    nombre: 'Celular',
    precio: 2500
  });
}

controller.getAllProductos = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      nombre: 'Celular',
      precio: 2500
    },
    {
      id: 2,
      nombre: 'Teclado',
      precio: 1500
    }
  ])
};

module.exports = controller;