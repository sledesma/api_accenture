const express = require("express");

// Conexión a la base de datos
const db = require('./mysql/connection');

// Routers
const productosRouter = require('./routes/productos');
const vistasRouter = require('./routes/vistas');
const estadisticasRouter = require('./routes/estadisticas');

const server = express();

// Middleware
server.use(express.json());
// Uso de Routers
server.use(productosRouter);
server.use(vistasRouter);
server.use(estadisticasRouter);

db.connect((err, args) => {
	console.log("Conexión a la base de datos realizada correctamente");
	console.log("Errores: ", err);
	server.listen(3000, () => {
		console.log("Servidor ejecutandose en http://localhost:3000");
	});
})

