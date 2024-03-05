// setup
const mongoose = require('mongoose')

// models
const currentSongCollection = require('../models/currentSongCollection')

// get all current songs
const getCurrentSongCollections = async (req, res) => {
    const current_songs = await currentSongCollection.find({})
    res.status(200).json(current_songs)
}

// get a single current song
const getCurrentSongCollection = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "song doesn't exist"})
    }

    const current_song = await currentSongCollection.findById(id)

    if (!current_song) {
        return res.status(404).json({error: "song doesn't exist"})
    }

    res.status(200).json(current_song)
}

// create a new current song
const createCurrentSongCollection = async (req, res) => {
    const { user, songs } = req.body

    try {
        const current_song = await currentSongCollection.create({ user, songs })
        res.status(200).json(current_song)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a current song
const deleteCurrentSongCollection = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "song doesn't exist"})
    }
    
    const current_song = await currentSongCollection.findOneAndDelete({_id: id})

    if (!current_song) {
        return res.status(404).json({error: "song doesn't exist"})
    }

    res.status(200).json(current_song)
}

// update a current song
const updateCurrentSongCollection = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "song doesn't exist"})
    }
    
    const current_song = await currentSongCollection.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!current_song) {
        return res.status(404).json({error: "song doesn't exist"})
    }

    res.status(200).json(current_song)
}

module.exports = {
    getCurrentSongCollections,
    getCurrentSongCollection,
    createCurrentSongCollection,
    deleteCurrentSongCollection,
    updateCurrentSongCollection
}

// delete a current song