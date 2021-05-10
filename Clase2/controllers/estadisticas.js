const controller = {};

controller.getStats = (req, res) => {
  res.status(200).json([
    {clave: 'suma_precio', valor: 4000}
  ])
}

module.exports = controller;