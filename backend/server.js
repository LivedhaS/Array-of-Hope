const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const memberRoutes = require('./routes/members'); // Import member routes

const app = express();

app.use(cors()); // Enable Cross-Origin Requests
app.use(express.json()); // Parse JSON bodies
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// Mount member routes at /api/members
app.use('/api/members', memberRoutes);

// MongoDB connection string (replace with your actual database URI if necessary)
mongoose.connect('mongodb://127.0.0.1:27017/teamDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => console.log("Server started on http://localhost:5000"));
  })
  .catch(err => console.error("MongoDB connection error:", err));
