const express = require('express');
const router = express.Router();
const multer = require('multer');
const Member = require('../models/Member');

// Set up Multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder to save images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
    try {
      console.log("Received form data:", req.body);  // Log the incoming request body
  
      const { name, regno, year, degree, about, aim, certificate } = req.body;
      const image = req.file?.filename || '';  // Image field
  
      // Validation: Ensure all fields are present
      if (!name || !regno || !year || !degree || !about || !aim || !certificate) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      // Create the new member and save it
      const member = new Member({
        name, regno, year, degree, about, aim, certificate, image
      });
  
      await member.save();  // Save to the database
      res.status(201).json(member);  // Return the saved member data
    } catch (err) {
      console.error("Error saving member:", err);
      res.status(500).json({ error: err.message });
    }
  });
  
  

// GET all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single member by ID
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: "Member not found" });
    }
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
