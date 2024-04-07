const nodeOdoo = require('node-odoo');
const connectionData = require('../../config/config').connectionData;

const odoo = new nodeOdoo(
    connectionData
);


odoo.connect(function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Conexión exitosa a Odoo');
});



module.exports = odoo;