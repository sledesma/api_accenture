module.exports = (function(){

  let connection = null;

  if(connection == null) {
    console.log('Creando conexión a la base de datos');
    const mysql = require('mysql');
    connection = mysql.createConnection({
      host: 'localhost',
      database: 'stock',
      user: 'root',
      password: ''
    })
  }

  return connection;

})()