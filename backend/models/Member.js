const mongoose = require('mongoose');

// Define the member schema
const memberSchema = new mongoose.Schema({
  name: String,
  regno: String,  // Register Number
  year: String,   // Year
  degree: String, // Degree
  about: String,  // About Project
  aim: String,    // Aim
  image: String,  // Profile Image
  certificate: String // Certificate name
});

// Create the model for members based on the schema
module.exports = mongoose.model('Member', memberSchema);
