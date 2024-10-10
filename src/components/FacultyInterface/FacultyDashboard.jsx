import React, { useState } from 'react';
import ClassList from './ClassList';
import UpdateProfile from './UpdateProfile';
import AddStudentForm from './AddStudentForm'; // Component for adding new students
import './styles.css'; // For styling the layout

const FacultyDashboard = () => {
  const [currentView, setCurrentView] = useState('classList');

  return (
    <div className="faculty-dashboard">
      <div className="nav-menu">
        <button onClick={() => setCurrentView('classList')}>Manage Class List</button>
        <button onClick={() => setCurrentView('addStudent')}>Add New Student</button>
        <button onClick={() => setCurrentView('updateProfile')}>Update Student Profile</button>
      </div>
      <div className="content">
        {currentView === 'classList' && <ClassList />}
        {currentView === 'addStudent' && <AddStudentForm />}
        {currentView === 'updateProfile' && <UpdateProfile />}
      </div>
    </div>
  );
};

export default FacultyDashboard;
