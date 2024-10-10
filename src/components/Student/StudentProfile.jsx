import React, { useState, useEffect } from 'react';
import './StudentProfile.css'; 
import studentImage from '../../assets/student.jpeg'; 

const StudentProfile = () => {
  // State to hold student data fetched from database
  const [studentData, setStudentData] = useState({});

  // Fetch student data from database when the component mounts
  useEffect(() => {
    // Simulating an API call to fetch data
    const fetchData = async () => {
      const data = await fetch('/api/student-profile'); // Replace with actual API endpoint
      const result = await data.json();
      setStudentData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          <img src={studentImage} alt="Student" />
        </div>
        <div className="personal-academic">
        <div className="profile-info">
          <h1 className="student-name">{studentData.name || 'AJAY KUMAR MAHTO'}</h1>
          <div className="profile-details">
            <div className="profile-row">
              <span>STUDENT STATUS</span>: <span className="status-active">{studentData.status || 'Active'}</span>
            </div>
            <div className="profile-row">
              <span>ADMISSION NO.</span>: <span>{studentData.admissionNo || 'AVIT-2886'}</span>
            </div>
            <div className="profile-row">
              <span>ROLL NO.</span>: <span>{studentData.rollNo || '3502110506'}</span>
            </div>
            <div className="profile-row">
              <span>DEGREE</span>: <span>{studentData.degree || 'Under Graduate'}</span>
            </div>
            <div className="profile-row">
              <span>DEPARTMENT</span>: <span>{studentData.department || 'COMPUTER SCIENCE'}</span>
            </div>
            <div className="profile-row">
              <span>SEMESTER</span>: <span>{studentData.semester || 'ODD'}</span>
            </div>
            <div className="profile-row">
              <span>COURSE NAME</span>: <span>{studentData.courseName || 'B.E COMPUTER SCIENCE AND ENGINEERING'}</span>
            </div>
            <div className="profile-row">
              <span>UNIVERSITY</span>: <span>{studentData.university || 'AARUPADAI VEEDU INSTITUTE OF TECHNOLOGY, PAIYANOOR, KANCHEEPURAM'}</span>
            </div>
            <div className="profile-row">
              <span>CURRICULUM PLAN</span>: <span>{studentData.curriculumPlan || 'REGULAR21'}</span>
            </div>
          </div>
        </div>
        <br /><hr /><br />
        <div className="profile-info">
        <div className="student-profile">
          <h2>Personal information</h2> <br />
          <button>Edit Profile</button>
        </div>
          <div className="profile-details">
            <div className="profile-row">
              <span>Student Name</span>: <span>{studentData.name || 'Ajay Kumar Mahto'}</span>
            </div>
            <div className="profile-row">
              <span>DOB</span>: <span>{studentData.rollNo || '25-Dec-2003'}</span>
            </div>
            <div className="profile-row">
              <span>Gender</span>: <span>{studentData.degree || 'Male'}</span>
            </div>
            <div className="profile-row">
              <span>Address</span>: <span>{studentData.department || 'BELA, , BHAGTA, , BHEJA, , MADHUBANI , BIHAR'}</span>
            </div>
            <div className="profile-row">
              <span>City</span>: <span>{studentData.semester || 'MADHUBANI'}</span>
            </div>
            <div className="profile-row">
              <span>State</span>: <span>{studentData.courseName || 'BIHAR'}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;