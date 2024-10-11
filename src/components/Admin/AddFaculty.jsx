import React, { useState } from 'react';
import axiosInstance from "../LoginSignup/axios.js";


const AddFaculty = () => {

  // Using individual states for each input field
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const role = 'faculty';

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const addFaculty = async () => {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        email,
        password,
        name,
        role: [role],
        phone
      });

      console.log(response.data);
      if (response && response.data.message === "User created successfully") {
        console.log("User created successfully");
        // Show success message after saving
        setMessage('Profile saved successfully!');
      }

    } catch (error) {
      console.error(error);
      setMessage('Error occurred while saving profile.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFaculty();
  };

  return (
    <div className="update-profile-form">
      <h2>Add Faculty</h2> <br />
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Faculty Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter Faculty Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />

        <label htmlFor="officeHours">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />

        <label htmlFor="phone">Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
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
