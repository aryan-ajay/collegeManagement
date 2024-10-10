import React, { useState, useEffect } from 'react';
import StudentCard from '../common/StudentCard';

const ClassList = () => {
  // State to store the selected course and student data
  const [selectedCourse, setSelectedCourse] = useState('');
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Mock data for students and courses
  const mockCourses = ['Math 101', 'Physics 201', 'Chemistry 301'];
  const mockStudents = [
    { id: 1, name: 'Alice Williams', email: 'alice@example.com', photo: 'https://via.placeholder.com/100', course: 'Math 101' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', photo: 'https://via.placeholder.com/100', course: 'Physics 201' },
    { id: 3, name: 'Catherine Davis', email: 'catherine@example.com', photo: 'https://via.placeholder.com/100', course: 'Math 101' },
    { id: 4, name: 'Daniel Brown', email: 'daniel@example.com', photo: 'https://via.placeholder.com/100', course: 'Chemistry 301' },
  ];

  // Simulate fetching data from an API
  useEffect(() => {
    setStudents(mockStudents);
  }, []);

  // Filter students based on the selected course
  useEffect(() => {
    if (selectedCourse) {
      const filtered = students.filter((student) => student.course === selectedCourse);
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents(students);
    }
  }, [selectedCourse, students]);

  return (
    <div className="class-list">
      <h2>Class List</h2>

      {/* Course Selector */}
      <div className="course-selector">
        <label htmlFor="course">Select Course:</label>
        <select
          id="course"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">All Courses</option>
          {mockCourses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      {/* Students List */}
      <div className="students-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))
        ) : (
          <p>No students enrolled in this course.</p>
        )}
      </div>
    </div>
  );
};

export default ClassList;