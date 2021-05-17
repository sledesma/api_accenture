var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
soap.createClient(url, function(err, client) {
    client.Add({ intA: 1, intB: 4 }, function(err, result) {
        console.log(result);
    });
});