const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const odooRoutes = require('./src/routes/odooRoutes');
const path = require('path');
const port = 3000;


app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false
}));



app.use(cookieParser());
app.use(bodyParser.json());

app.use('/taller', express.static(path.join(__dirname, 'public')));
app.use('/api', odooRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});


app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});