import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './MemberDetails.css';

const MemberDetails = () => {
  const { id } = useParams();  // Get member ID from the URL
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!member) return <p className="loading">Loading...</p>;

  return (
    <div className="details-container">
      <div className="details-card">
        <img
          src={`http://localhost:5000/uploads/${member.image}`}
          alt={member.name}
          className="member-image"
        />
        <h2>{member.name}</h2>
        <p><strong>Register Number:</strong> {member.regno}</p>
        <p><strong>Year:</strong> {member.year}</p>
        <p><strong>Degree:</strong> {member.degree}</p>
        <p><strong>About Project:</strong><br /> {member.about}</p>
        <p><strong>Certificate:</strong> {member.certificate}</p>
        <p><strong>Aim:</strong> {member.aim}</p>
        
        {/* Back Button to Home */}
        <Link to="/">
          <button className="back-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default MemberDetails;
