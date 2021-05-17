const express = require('express');
const conection = require('./data/connection');
const tokenModel = require('./data/models/tokens');

const server = express();

// Auth Middleware
server.use(function(req, res, next){
  if(!req.headers.authorization) {
    res.status(403).send('Not authorized');
    return;
  }

  const token = req.headers.authorization.split(' ')[1]

  tokenModel.validateToken(token, function(isValid){

    if(!isValid) {
      res.status(403).send('Not authorized');
      return;
    }

    tokenModel.susbtractOperation(token, function(data){
      if(data === false) {
        res.status(501).send('Error');
        return;
      }

      console.log(data)

      next();
    })

  });

});

// Logging Middleware
/*
server.use(function(req, res, next){

});
*/

server.get('/dummy', function(req, res){
  res.send('Dummy')
});

conection.connect(function(err, args){
  if(err) return false;

  console.log('Conectandose a la base de datos...');

  server.listen(3000, () => console.log('Servidor ejecutandos en http://localhost:3000'))
});