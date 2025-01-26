const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const playerRoutes = require('./routes/playerRoutes'); // Import routes

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://laharireddy815:Lahari08@csc6210.v4tty.mongodb.net/cricket_db?retryWrites=true&w=majority&appName=CSC6210');

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Use routes
app.use('/api/players', playerRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
