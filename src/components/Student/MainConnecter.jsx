import React, { useState } from 'react';
import StudentProfile from './StudentProfile';
import Attendance from './Attendance';
import './MainConnecter.css';
import FacultyAdvisors from './FacultyAdvisors';

const MainConnecter = () => {
  const [activeComponent, setActiveComponent] = useState('profile'); 

  const renderComponent = () => {
    if (activeComponent === 'profile') {
      return <StudentProfile />;
    } else if (activeComponent === 'attendance') {
      return <Attendance />;
    } else if(activeComponent === 'facultyAdvisors') {
        return <FacultyAdvisors />
    }
  };

  return (
    <div className="main-container">
      <div className="button-container">
        <button
          className={`nav-button ${activeComponent === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveComponent('profile')}
        >
          Profile
        </button>
        <button
          className={`nav-button ${activeComponent === 'attendance' ? 'active' : ''}`}
          onClick={() => setActiveComponent('attendance')}
        >
          Attendance
        </button>
        <button
          className={`nav-button ${activeComponent === 'facultyAdvisors' ? 'active' : ''}`}
          onClick={() => setActiveComponent('facultyAdvisors')}
        >Faculty Contact</button>
      </div>
      <div className="component-container">
        {renderComponent()}
      </div>
    </div>
  );
};

export default MainConnecter;
