import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterPopup = ({ onClose, onFilterSelect }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleTodayFilter = () => {
    const today = new Date();
    setStartDate(today);
    setEndDate(today);
  };



  const handleFixedPeriodFilter = () => {
    const fixedStart = new Date(now.getFullYear(), 0, 1);
    const fixedEnd = new Date(now.getFullYear(), 11, 31); 
    setStartDate(fixedStart);
    setEndDate(fixedEnd);
  };

  const handleSubmit = () => {
    onFilterSelect({ startDate, endDate });
  };

  return (
    <div className="filter-popup">
      <button onClick={handleTodayFilter}>Today</button>
      <button onClick={handleFixedPeriodFilter}>Fixed Period</button>

      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <br />
      <button onClick={handleSubmit}>Apply Filter</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default FilterPopup;