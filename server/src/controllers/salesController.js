const odoo = require('./odooController');

exports.getSales = (req, res) => {
    // const domain = [['state', '=', 'to_close']];
    const domain = [];
    const params = {
        fields: ['id', 'name'],
        offset: 0,
        limit: 0,
        order: 'name',
    };

    odoo.search_read('sale.order', domain, params, (err, data) => {
        if (err) {
            console.error('Error al buscar registros:', err);
            return res.status(500).json({ error: 'Error al buscar registros' });
        }
        console.log(data);
        res.json(data);
    });
};