const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    duration: {
        type: Number
    },
    premiere: {
        type: String
    },
});

mongoose.model('Movie', MovieSchema);