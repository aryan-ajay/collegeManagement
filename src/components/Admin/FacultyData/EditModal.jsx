import React, { useState } from 'react';
import './EditStyle.css';


const EditModal = ({ user, onClose }) => {
  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
      try {
          const response = await axiosInstance.put(`/owner/application/${user.applicationId}`, formData);
          if (response && response.data) {
              setFormData(response.data);
              console.log("Handle Submit EditModel response:" + response.data);
          } else {
              console.error("No data found in response");
          }
      } catch (error) {
          console.error("Error fetching applications:", error);
      }
    onClose(); // Close modal after submission
  };

  return (
    <div className="modal">
      <h2>Edit User</h2>
      <div className="both-data">
        <div className="form-level1">
            <label>
                First Name:
                <input name="firstName" value={formData.firstName} onChange={handleInputChange} />
            </label>
            <label>
                Last Name:
                <input name="lastName" value={formData.lastName} onChange={handleInputChange} />
            </label>
            <label>
                Email:
                <input name="email" value={formData.email} onChange={handleInputChange}/>
            </label>
            <label>
                Country:
                <input name="country" value={formData.country} onChange={handleInputChange} />
            </label>
        </div>
        <div className="form-level2">
            <label>
                Domain:
                <input name="internshipDomain" value={formData.internshipDomain} onChange={handleInputChange} />
            </label>
            <label>
                Gender:
                <input name="gender" value={formData.gender} onChange={handleInputChange} />
            </label>
            <label>
                Mobile No:
                <input name="phone" value={formData.phone} onChange={handleInputChange} />
            </label>
            <label>
                College:
                <input name="college" value={formData.college} onChange={handleInputChange} />
            </label>
        </div>
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EditModal;
