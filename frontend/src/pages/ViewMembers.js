import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => setMembers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Team Members</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {members.map(member => (
          <div key={member._id} style={{
            border: '1px solid #ccc', 
            margin: '10px', 
            padding: '15px', 
            width: '200px', 
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}>
            <img 
              src={`http://localhost:5000/uploads/${member.image}`} 
              alt={member.name} 
              style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
            />
            <h4>{member.name}</h4>
            <p><strong>Register Number:</strong> {member.regno}</p>
            <p><strong>Year:</strong> {member.year}</p>
            <p><strong>Degree:</strong> {member.degree}</p>
            <p><strong>About Project:</strong><br /> {member.about}</p>
            <p><strong>Certificate:</strong> {member.certificate}</p>
            <p><strong>Aim:</strong> {member.aim}</p>
            <Link to={`/member/${member._id}`}>
              <button style={{ padding: '5px 15px', backgroundColor: '#6a1b9a', color: 'white', borderRadius: '5px', border: 'none' }}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Back Button to Home */}
      <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default ViewMembers;
