const mongoose = require('mongoose');

const Movie = mongoose.model('Movie');

module.exports = {
    async list(req, res) {
        const movies = await Movie.find();
        return res.json(movies);
    },

    async getById(req, res) {
        const movie = await Movie.findById(req.params.id);
        return res.json(movie);
    },

    async create(req, res) {
        const movie = await Movie.create(req.body);
        return res.json(movie);
    },
  
    async update(req, res) {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(movie);
    },

    async delete(req, res) {
        await Movie.findByIdAndDelete(req.params.id);
        return res.send("Sucess");
    },
};