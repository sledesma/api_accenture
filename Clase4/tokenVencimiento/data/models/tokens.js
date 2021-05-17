const db = require('../connection');
const model = {};

model.validateToken = function(token, callback) {
  db.query('SELECT usuarios_tokens.token FROM usuarios_tokens WHERE usuarios_tokens.active = True AND usuarios_tokens.operaciones_restantes > 0 ', function(err, results){
    if(err || !results[0]) callback(false);
    
    const encontrado = results.find((val) => val.token == token)

    callback(encontrado)
  });
}

model.getTokenData = function(token, callback) {
  db.query('SELECT * FROM usuarios_tokens WHERE usuarios_tokens.token = "'+token+'"', function(err, results){
    if(err) {
      callback(false);
      return;
    }
  
    callback(results)
    return;
  }); 
}

model.susbtractOperation = function(token, callback) {
  model.getTokenData(token, function(data){
    const tokenData = data[0]
    const op_rest = Number(tokenData.operaciones_restantes);
    let active = Number(tokenData.active)
    let nuevas_operaciones = op_rest - 1
    

    if(nuevas_operaciones >= 0) {
      active = true;
    } else if(nuevas_operaciones == 0){
      active = false;
    } else if(nuevas_operaciones < 0) {
      active = false;
      nuevas_operaciones = 0;
    }

    db.query(`UPDATE usuarios_tokens SET operaciones_restantes = ${nuevas_operaciones}, active = ${active} WHERE usuarios_tokens.token = "${token}" `, function(err, results){
      if(err) {
        console.log(err);
        callback(false);
        return;
      }

      callback(results);
      return;
    });

  })
}

module.exports = model;