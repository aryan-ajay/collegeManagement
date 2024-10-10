import React, { useState } from 'react';
import Analytics from './Analytics';
import StudentDetails from './StudentDetails';
import FacultyDetails from './FacultyDetails';
import AddFaculty from './AddFaculty';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('analytics'); // Set default view to 'analytics'

  return (
    <div className="faculty-dashboard">
      <div className="nav-menu">
        <button onClick={() => setCurrentView('analytics')}>Analytics</button>
        <button onClick={() => setCurrentView('studentDetails')}>Student Details</button>
        <button onClick={() => setCurrentView('facultyDetails')}>Faculty Details</button>
        <button onClick={() => setCurrentView('addFaculty')}>Add Faculty</button>
      </div>
      <div className="content">
        {currentView === 'analytics' && <Analytics />}
        {currentView === 'studentDetails' && <StudentDetails />}
        {currentView === 'facultyDetails' && <FacultyDetails />}
        {currentView === 'addFaculty' && <AddFaculty />}
      </div>
    </div>
  );
};

export default Dashboard;
