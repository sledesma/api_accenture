const express = require("express");

const server = express();

server.post("/productos", (req, res) => {
	res.status(200).json({ inserted: true });
});

server.delete("/productos/:id", (req, res) => {
	res.status(200).json({ deleted: 10 });
});

server.put("/productos/:id", (req, res) => {
	res.status(200).json({ 
    updated: { 
      id: 1, 
      nombre: "Celular", 
      precio: 2500 
    } 
  });
});

server.get('/productos/:id', (req, res) => {
  res.status(200).json({
    id: 1,
    nombre: 'Celular',
    precio: 2500
  });
});

server.get('/productos', (req, res) => {
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
});

server.get('/vistas/:id', (req, res) => {
  res.status(200).json([
    {
      id: 2,
      nombre: 'Teclado',
      precio: 1500
    }
  ]);
})

server.get('/estadisticas/:id', (req, res) => {
  res.status(200).json([
    {clave: 'suma_precio', valor: 4000}
  ])
});

server.listen(3000, () => {
	console.log("Servidor ejecutandose en http://localhost:3000");
});
