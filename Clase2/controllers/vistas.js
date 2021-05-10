const controller = {};

controller.getView = (req, res) => {
  res.status(200).json([
    {
      id: 2,
      nombre: 'Teclado',
      precio: 1500
    }
  ]);
}

module.exports = controller;