const express = require('express');
const routes = express.Router();
const MovieController = require('./controllers/MovieController');

routes.get('/movies', MovieController.list);
routes.get('/get_movie_Id/:id', MovieController.getById);
routes.post('/create_movie', MovieController.create);
routes.put('/update_movie/:id', MovieController.update);
routes.delete('/delete_movie/:id', MovieController.delete);

module.exports = routes;


