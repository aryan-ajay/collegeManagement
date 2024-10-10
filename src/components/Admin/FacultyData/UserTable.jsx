import React, { useState, useEffect } from 'react';
import EditModal from './EditModal';
import { exportToCSV } from './exportUtils';

const UserTable = ({ dbApplication, searchQuery, selectedUsers, handleSelectAll, handleUserSelect, showMenu }) => {
  const [showActions, setShowActions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const truncateMessage = (message) => {
    const words = message.split(' ');
    return words.length > 30 ? words.slice(0, 30).join(' ') + '...' : message;
  };

  const handleMoreActionClick = () => {
    setShowActions((prev) => !prev);
  };

  const handleEditClick = () => {
    if (selectedUsers.length === 1) {
      const user = dbApplication.find((user) => user.email === selectedUsers[0]);
      setUserToEdit(user);
      setShowEditModal(true);
    }
  };

  const handleExportClick = () => {
    const selectedData = dbApplication.filter((user) => selectedUsers.includes(user.email));
    exportToCSV(selectedData, 'applications');
  };

  // Filter the dbApplication array based on searchQuery
  const filteredApplications = dbApplication.filter((user) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      user.email.toLowerCase().includes(lowerCaseQuery) ||
      user.firstName.toLowerCase().includes(lowerCaseQuery) ||
      user.lastName.toLowerCase().includes(lowerCaseQuery) ||
      user.country.toLowerCase().includes(lowerCaseQuery) ||
      user.internshipDomain.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className='user-container'>
      {showMenu &&
        <div className="more-menu">
          <button onClick={handleMoreActionClick}>More Action</button>
          {showActions && (
            <div className="action-buttons">
              {selectedUsers.length === 1 && <button onClick={handleEditClick}>Edit</button>}
              <button onClick={handleExportClick}>Export</button>
              <button>Remove</button>
            </div>
          )}
        </div>
      }
      {/*Just for redeploying the frontend, we can delete this comment anytime*/}
      <table className="user-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={filteredApplications.length > 0 && selectedUsers.length === filteredApplications.length}
              />
            </th>
            <th>EMAIL</th>
            <th>NAME</th>
            <th>STUDENT STATUS</th>
            <th>ADMISSION NO</th>
            <th>ROLL NO</th>
            <th>DEGREE</th>
            <th>DEPARTMENT</th>
            <th>SEMESTER</th>
            <th>COURSE NAME</th>
            <th>MOBILE NO.</th>
            <th>COLLEGE</th>
            <th style={{ display: 'none' }}>APPLICATION ID</th> {/* Hidden column for applicationId */}
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((user, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.email)}
                  onChange={() => handleUserSelect(user.email)}
                />
              </td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.studentStatus}</td>
              <td>{user.addmissionNo}</td>
              <td>{user.degree}</td>
              <td>{user.department}</td>
              <td>{user.semester}</td>
              <td>{user.courseName}</td>
              <td>{user.college}</td>
              <td style={{ display: 'none' }}>{user.applicationId}</td> {/* Hidden field for applicationId */}
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && (
        <EditModal
          user={userToEdit}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default UserTable;
