const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//Conexão com Banco de Dados no Heroku
mongoose.connect("mongodb://heroku_n6hvm46p:thelry1987@ds029803.mlab.com:29803/heroku_n6hvm46p", { useNewUrlParser: true });

// Importação do Model
require('./src/models/Movie');

// Rotas
app.use('/api', require('./src/routes'));


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Running on ' + PORT)
});