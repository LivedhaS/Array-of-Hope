import React, { useState } from 'react';
import axios from 'axios';
import './AddMember.css'; // Link the CSS file
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    regno: '',
    year: '',
    degree: '',
    about: '',
    aim: '',
    certificate: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    
    // Make sure all fields are appended correctly
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {  // Only append if the value exists (not undefined or empty)
        data.append(key, value);
      }
    });
  
    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert('Member added successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to add member');
    }
  };

  return (
    <div className="add-container">
      <h2 className="form-title">Add New Team Member</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="form">
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Register Number</label>
        <input type="text" name="regno" onChange={handleChange} required />

        <label>Year</label>
        <input type="text" name="year" onChange={handleChange} required />

        <label>Degree</label>
        <input type="text" name="degree" onChange={handleChange} required />

        <label>About Project</label>
        <textarea name="about" rows="3" onChange={handleChange} required />

        <label>Certificate Name</label>
        <input type="text" name="certificate" onChange={handleChange} required />

        <label>Aim</label>
        <input type="text" name="aim" onChange={handleChange} required />

        <label>Profile Image</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {/* Back Button to Home */}
      <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default AddMember;
