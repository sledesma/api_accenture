const express = require('express');
const axios = require('axios').default;

const server = express();

server.use(express.json());

server.post('/query', async function(req, res){

  const axiosRes = await axios.get('https://jsonplaceholder.typicode.com/users/');
  const data = axiosRes.data;
  const fields = req.body.fields ? req.body.fields : []
  const eq_filter = req.body.eq ? req.body.eq : false;
  const like_filter = req.body.like ? req.body.like : false;

  let output = data;
  
  // Procesar los campos
  output = output.map(item => {
    if(fields.length == 0) {
      return item;
    }

    const aux = {};

    for (const key in item) {
      if(fields.includes(key)) {
        aux[key] = item[key]
      }
    }

    return aux;
  });

  // Procesar las condiciones
  if(eq_filter !== false) {
    output = output.filter(item => {
      return item[eq_filter.campo] == eq_filter.valor
    });
  }

  if(like_filter !== false) {
    output = output.filter(item => {
      const str = item[like_filter.campo].toString().toLowerCase();
      return str.includes(like_filter.valor.toLowerCase())
    })
  }
  /*
  output = output.map(item => {
    if(where === false) {
      return item;
    }

    let aux = item;

    for (const f_clave in where) {
      if (Object.hasOwnProperty.call(where, f_clave)) {
        const filtro = where[f_clave];
        
        switch(f_clave) {

          case 'eq':
            const campo = filtro.campo
            const valor = filtro.valor

            

            if(item[campo] == valor) {
              aux = item;
            }

          break;

        }

      }
    }

    return item;


  });
  */


  res.send(output);

});

server.listen(3000, () => console.log('Servidor ejecutandose en http://localhost:3000/'))