import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilterPopup = ({ onClose, onFilter }) => {
  const [filterType, setFilterType] = useState('exact'); 
  const [exactDate, setExactDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleApplyFilter = () => {
    if (filterType === 'exact') {
      onFilter(exactDate, null); 
    } else {
      onFilter(startDate, endDate); 
    }
    onClose(); 
  };

  return (
    <div className="filter-popup">
      <h2>Select Date Filter</h2>
      <div className="filter-options">
        <button onClick={() => setFilterType('exact')}>Exact Date</button>
        <button onClick={() => setFilterType('period')}>Fixed Period</button>
      </div>

      {filterType === 'exact' && (
        <div>
          <label>Select Exact Date:</label>
          <DatePicker
            selected={exactDate}
            onChange={(date) => setExactDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText='dd/MM/yyyy'
          />
        </div>
      )}

      {filterType === 'period' && (
        <div>
          <label>Select Date Range:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            placeholderText='dd/MM/yyyy'
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            placeholderText='dd/MM/yyyy'
          />
        </div>
      )}

      <button onClick={handleApplyFilter}>Apply Filter</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DateFilterPopup;
