const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

// GET all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new player
router.post('/', async (req, res) => {
    try {
        const newPlayer = new Player(req.body);
        const savedPlayer = await newPlayer.save();
        res.status(201).json(savedPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PATCH a player by ID
router.patch('/:id', async (req, res) => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPlayer) return res.status(404).json({ message: 'Player not found' });
        res.json(updatedPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a player by ID
router.delete('/:id', async (req, res) => {
    try {
        const result = await Player.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Player not found' });
        res.json({ message: 'Player deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
