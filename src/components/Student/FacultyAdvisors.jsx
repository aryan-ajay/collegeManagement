import React, { useState, useEffect } from 'react';
import './FacultyAdvisors.css'; // Import your CSS file

const FacultyAdvisors = () => {
  const [advisors, setAdvisors] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Simulate fetching advisors from a backend
  useEffect(() => {
    const fetchAdvisors = async () => {
      const advisorData = [
        { id: 1, name: 'Dr. John Smith', email: 'john.smith@example.com', phone: '123-456-7890' },
      ];
      setAdvisors(advisorData);
    };
    fetchAdvisors();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Show a message after form submission
    setFormSubmitted(true);
  };

  return (
    <div className="advisors-container">
      <h2 className="title">Faculty Advisors</h2>
      <div className="advisors-list">
        {advisors.map((advisor) => (
          <div key={advisor.id} className="advisor-card">
            <h3>{advisor.name}</h3>
            <p>Email: <a href={`mailto:${advisor.email}`}>{advisor.email}</a></p>
            <p>Phone: <a href={`tel:${advisor.phone}`}>{advisor.phone}</a></p>
          </div>
        ))}
      </div>

      <div className="contact-form-container">
        <h2>Contact a Faculty Member</h2>
        {formSubmitted ? (
          <div className="form-success-message">
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FacultyAdvisors;