const express = require('express');
const axios = require('axios').default;
const model = require('../data/models/productos');

const router = express.Router();

router.get('/', function(req, res){
  model.getAll(function(datos){

    axios.get('https://api.estadisticasbcra.com/usd', {
      headers: {
        'Authorization': "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTIzNjk3NTcsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJzZWJhc3RpYW4ubGVkZXNtYTA4QGdtYWlsLmNvbSJ9.2aO40GMlm3jglszpEqgWQYdMvyIQzuCLNJfjQZZVqx6Pzz6BuoPGhVdUWUkaS-9Qhm1V3h6hTOuB_hJdbV-78w"
      }
    }).then(function(axiosData){
      const precioDolar = axiosData.data[axiosData.data.length - 1].v;
      res.json(
        datos.map(function(valor){
          const aux = valor;
          valor.precio_usd = Math.round(valor.precio_ars / precioDolar)
          return aux;
        })
      );
    })
  })
});

router.post('/', function(req, res){
  model.create(req.body, function(data){
    console.log('Creado!')
    res.json(data);
  });
});

module.exports = router;