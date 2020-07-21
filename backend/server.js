const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Conexão com Banco de Dados no Heroku
mongoose.connect("mongodb://heroku_n6hvm46p:thelry1987@ds029803.mlab.com:29803/heroku_n6hvm46p", { useNewUrlParser: true });

// Importação do Model
require('./src/models/Movie');

const Movie = mongoose.model('Movie')

// Rotas
app.get('/', (req, res) => {

    Movie.create({
            title: 'Matrix',
            synopsis: 'A young programmer discovery the real world is destroyed in the pass',
            gender: 'Fiction and Adventure',
            duration: 120,
            premiere: '20/05/2009'
    });

    return res.send('Welcome Synopsis Movies')
});


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Running on ' + PORT)
});