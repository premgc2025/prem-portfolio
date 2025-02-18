import React, { useState } from 'react';

import NepaliDate from 'nepali-datetime'
import './DateConvert.css';

const DateConverter = () => {  
const [nepaliDate, setNepaliDate] = useState("");
const [englishDate, setEnglishDate] = useState("");
const [error, setError] = useState("");

const handleConvert = () => {
  setError(""); // Clear previous errors
  setEnglishDate(""); // Clear previous result

  // Validate input format
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(nepaliDate)) {
    setError("Invalid format. Please use YYYY-MM-DD.");
    return;
  }

  // Split the date into year, month, and day
  const [year, month, day] = nepaliDate.split("-").map(Number);

  // Validate Nepali date ranges
  if (year < 2000 || year > 2099) {
    setError("Year must be between 2000 and 2099.");
    return;
  }
  if (month < 1 || month > 12) {
    setError("Month must be between 1 and 12.");
    return;
  }
  if (day < 1 || day > 32) {
    setError("Day must be between 1 and 32.");
    return;
  }

  try {
    // Create a Nepali date (2080-09-01)
const nepaliDate = new NepaliDate(2080, 9 - 1, 1);  // Remember: month is 0-based

// Get the corresponding English date (it returns a timestamp or number)
const englishDateTimestamp = nepaliDate.getEnglishDate()

// Convert the timestamp to a JavaScript Date object
const englishDate = new Date(englishDateTimestamp);

// Format the Date object to YYYY-MM-DD
const englishDateFormatted = englishDate.toISOString().split("T")[0];

console.log(englishDateFormatted);  // Output: "2023-12-15"
    setEnglishDate(englishDateFormatted);
  } catch (err) {
    console.error("Conversion error:", err);
    setError("Invalid date. Please check the input.");
  }
};

return (
  <div className="container">
    <h1>Nepali Date to English Date Converter</h1>
    <div className="input-group">
      <label htmlFor="nepali-date">Nepali Date (YYYY-MM-DD):</label>
      <input
        id="nepali-date"
        type="text"
        value={nepaliDate}
        onChange={(e) => setNepaliDate(e.target.value)}
        placeholder="e.g., 2080-01-15"
      />
    </div>
    {error && <div className="error">{error}</div>}
    <button onClick={handleConvert}>Convert</button>
    {englishDate && (
      <div className="result">
        <strong>English Date:</strong> {englishDate}
      </div>
    )}
  </div>
);
};

export default DateConverter;