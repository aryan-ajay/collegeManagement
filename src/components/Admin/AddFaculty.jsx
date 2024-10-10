import React, { useState } from 'react';


const AddFaculty = () => {
  const [profile, setProfile] = useState({
    officeHours: '',
    email: '',
    phone: '',
  });
  const [message, setMessage] = useState(''); // Message state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate saving the profile to the database
    setTimeout(() => {
      console.log('Profile saved:', profile);

      // Show success message after saving
      setMessage('Profile saved successfully!');
      
      // Clear the message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }, 1000); // Simulated delay for saving
  };

  return (
    <div className="update-profile-form">
      <h2>Add Faculty</h2> <br />
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />

        <label htmlFor="officeHours">Password :</label>
        <input
          type="password"
          id="officeHours"
          name="officeHours"
          value={profile.officeHours}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />

        <label htmlFor="phone">Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={profile.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          required
        />

        <button type="submit">Save</button>
      </form>

      {/* Display success message */}
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default AddFaculty;