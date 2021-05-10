const express = require('express');
const axios = require('axios').default;

const server = express();

const client = axios.create({
  headers: {
    'Authorization': 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTE3NjQzNDIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJzZWJhc3RpYW4ubGVkZXNtYTA4QGdtYWlsLmNvbSJ9.MHQs--xQcR-ChiwxXaB1KvGkZpPffuSOBIqatPOJuDuxISEtpygCEXrrnBVP0ZJH7UdzSSN-PiH9Xjo9lpAJRg'
  }
});

server.get('/', async (req, res) => {
  client.get('https://api.estadisticasbcra.com/usd')
    .then(r => {
      res.json(r.data);
    })
    .catch(e => {
      res.status(e.response.status).send(e.response.data); 
    })
  
  //res.json(respuesta.data);
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

