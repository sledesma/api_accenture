const db = require('../connection');

const model = {};

model.getOne = function(id, callback) {
  db.query('SELECT * FROM productos WHERE id = '+id, function(err, results, campos){
    callback(results);
  });
}

model.getAll = function(callback) {
  db.query('SELECT * FROM productos', function(err, results, campos){
    callback(results);
  })
}

model.create = function(data, callback) {
  db.query("INSERT INTO productos(nombre, descripcion, precio_ars, fecha_alta, stock_inicial, categoria_id) VALUES ('"+data.nombre+"', '"+data.descripcion+"', "+data.precio_ars+" , '"+data.fecha_alta+"', "+data.stock_inicial+", "+data.categoria_id+") ", function(err, results){
    callback(results);
  });
}

module.exports = model;