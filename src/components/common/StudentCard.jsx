import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <img src={student.photo} alt={`${student.name}'s photo`} />
      <div className="student-info">
        <h3>{student.name}</h3>
        <p>Email: {student.email}</p>
        <p>Course: {student.course}</p> {/* Display the course name */}
      </div>
    </div>
  );
};

export default StudentCard;