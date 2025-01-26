const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    role: String,
    nationality: String,
    ID: String,
    age: String,
    stats: {
        runs: Number,
        wickets: Number,
        matches: Number,
        won: Number,
        lost: Number
    }
});

module.exports = mongoose.model('Player', playerSchema);
