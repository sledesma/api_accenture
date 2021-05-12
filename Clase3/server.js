/**
 * Librerías y recursos necesarios
 */
const express = require('express');
const crypto = require('crypto');

const router = require('./routes/root');
const dbConnection = require('./data/connection');

/**
 * Construir el servidor
 */
const server = express();
const ENDPOINT = '/api/v1';

const hash = crypto.createHash('md5');
const text = (new Date()).toISOString() + Math.random() * 100
hash.update(text);
const API_KEY = hash.digest('base64');

/**
 * Request Lifecycle
 */
// Validar la identidad del usuario
server.use(function(req, res, next){
  if(req.headers.authorization && req.headers.authorization == "BEARER "+API_KEY) next();
  else res.send('No tienes permiso...¡Y no vuelvas!')
});

// Recibir el cuerpo de la petición
server.use(express.json()); 

// Router
server.use(ENDPOINT, router);

/**
 * Iniciar el servidor
 */
dbConnection.connect(function(err, args){

  if(err) return false;

  console.log('Conectándose a la base de datos');

  server.listen(3000, () => {
    console.log('Servidor ejecutandos en http://localhost:3000')
    console.log('API KEY: '+API_KEY);
  });

})

