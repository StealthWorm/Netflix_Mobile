const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const cors = require('cors');
const app = express();

const filmeRoutes = require('./src/routes/filmes.routes');
const usuarioRoutes = require('./src/routes/usuarios.routes');
const episodeoRoutes = require('./src/routes/episodeos.routes');

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//Routes
app.use('/', filmeRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/episodeo', episodeoRoutes);

app.listen(8000, () => {
   console.log('Meu servidor esta funcionando');
});