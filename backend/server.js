require('dotenv').config();
require('cors');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path'); // Add path to serve static files
const app = express();

// Routes
const currentSongsCollectionRoutes = require('./routes/currentSongsCollection');
const spotifyAPIRoutes = require('./routes/spotifyAPI');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// API Routes
app.use('/api/current_songs', currentSongsCollectionRoutes);
app.use('/spotify', spotifyAPIRoutes);
app.use('/users', userRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, '../../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
    });
}

// Connect to MongoDB and listen for requests
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
