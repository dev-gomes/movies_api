const express = require('express');
const routes = express.Router();

const controller = require('../controller/movieController');

routes.get('/movies', controller.getAllMovies);
routes.get('/movies/:id', controller.getMovieById);

module.exports = routes;