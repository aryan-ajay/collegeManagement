import React, { useState } from 'react';
import axiosInstance from "../LoginSignup/axios.js";

const AddStudentForm = () => {

  // Using individual states for each input field
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const role = 'student'; // Static role value

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

  const addStudent = async () => {
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
    addStudent();
  };

  return (
      <div className="update-profile-form">
        <h2>Add Student</h2> <br />
        <form onSubmit={handleSubmit}>

          <label htmlFor="fullname">Student Name</label>
          <input
              type="text"
              id="fullname"
              name="name" // Corrected name attribute
              value={name} // Use the state value
              onChange={handleInputChange}
              placeholder="Enter Full Name"
              required
          />

          <label htmlFor="email">Student Email</label>
          <input
              type="email"
              id="email"
              name="email" // Corrected name attribute
              value={email} // Use the state value
              onChange={handleInputChange}
              placeholder="Student Email"
              required
          />

          <label htmlFor="password">Password </label>
          <input
              type="password"
              id="password"
              name="password" // Corrected name attribute
              value={password} // Use the state value
              onChange={handleInputChange}
              placeholder="Password"
              required
          />

          <label htmlFor="phone">Student Number</label>
          <input
              type="tel"
              id="phone"
              name="phone" // Corrected name attribute
              value={phone} // Use the state value
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

export default AddStudentForm;
