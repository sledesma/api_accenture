const db = require('../mysql/connection');

const model = {};

model.getOne = (id, callback) => {
  db.query("SELECT * FROM productos WHERE id = "+id,callback);
}

model.getAll = (callback) => {
  db.query("SELECT * FROM productos",callback);
}

module.exports = model;