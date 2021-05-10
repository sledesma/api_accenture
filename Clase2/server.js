const express = require("express");

// Routers
const productosRouter = require('./routes/productos');
const vistasRouter = require('./routes/vistas');
const estadisticasRouter = require('./routes/estadisticas');

const server = express();

// Uso de Routers
server.use(productosRouter);
server.use(vistasRouter);
server.use(estadisticasRouter);

server.listen(3000, () => {
	console.log("Servidor ejecutandose en http://localhost:3000");
});
