import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import DateFilterPopup from './DateFilterPopup';
import './Application.css';

const Application = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dbApplication, setDbApplication] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [menu, setMenu] = useState(false);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filteredData, setFilteredData] = useState([]); // Updated
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Fetch all applications
  const fetchAllApplications = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/owner/application/all");
      if (response && response.data) {
        console.log("API response data:", response.data);
        setDbApplication(response.data);
        setFilteredData(response.data); // Set initial data for filtering
        localStorage.setItem('applications', JSON.stringify(response.data));
      } else {
        console.error("No data found in response");
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const localData = localStorage.getItem('applications');
    if (localData) {
      const storedApplications = JSON.parse(localData);
      setDbApplication(storedApplications);
      setFilteredData(storedApplications);
    } else {
      fetchAllApplications();
    }
  }, []);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const allUserIds = filteredData.map((user) => user.email);
      setSelectedUsers(allUserIds);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleUserSelect = (email) => {
    setSelectedUsers((prevSelected) =>
        prevSelected.includes(email)
            ? prevSelected.filter((userEmail) => userEmail !== email)
            : [...prevSelected, email]
    );
    setMenu(true);
  };

  // Function to open the filter popup
  const openFilterPopup = () => {
    setShowFilterPopup(true);
  };

  // Function to handle date filter (both exact date and fixed period)
  const handleDateFilter = (startDate, endDate) => {
    const filtered = dbApplication.filter((user) => {
      if (!user.internshipStartingDate) {
        return false; // Prevent errors if the date field is missing
      }

      // Convert "15-09-2024" to "2024-09-15" (valid format)
      const [day, month, year] = user.internshipStartingDate.split('-');
      const appliedDate = new Date(`${year}-${month}-${day}`);
      console.log("User appliedDate:", appliedDate); // Debugging log

      if (startDate && endDate) {
        return appliedDate >= startDate && appliedDate <= endDate;
      } else if (startDate) {
        return appliedDate.toDateString() === startDate.toDateString();
      }
      return true;
    });

    setFilteredData(filtered);
    setSelectedUsers(filtered.map(user => user.userId?.email || ''));
  };

  const handleReRender = () => {
    fetchAllApplications(); // Fetch new data on button click
    localStorage.removeItem('applications');
  };

  return (
    <div className="dashboard-application">
      <h1>Faculty Details</h1>
      <div className="re-render-data">
        <button className={`icon-button ${loading ? 'spin' : ''}`} onClick={handleReRender}>
          <i className="fa-solid fa-repeat"></i>
        </button>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="menu-btns">
        <button className="filter-btn" onClick={openFilterPopup}>Add Filters</button>
        <h3>Total Students: {filteredData.length}</h3>
      </div>
      <UserTable
        dbApplication={filteredData}
        searchQuery={searchQuery}
        selectedUsers={selectedUsers}
        handleSelectAll={handleSelectAll}
        handleUserSelect={handleUserSelect}
        showMenu={menu}
      />
      {showFilterPopup && (
        <DateFilterPopup onClose={() => setShowFilterPopup(false)} onFilter={handleDateFilter} />
      )}
    </div>
  );
};

export default Application;
