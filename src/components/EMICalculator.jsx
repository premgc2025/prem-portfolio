
import React, { useState } from "react";
import "./EMICalculator.css"; // Import the CSS file

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rateOfInterest = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(years) * 12;

    if (principal && rateOfInterest && numberOfPayments) {
      const emiValue =
        (principal *
          rateOfInterest *
          Math.pow(1 + rateOfInterest, numberOfPayments)) /
        (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi(0);
    }
  };

  return (
    <div className="emi-calculator">
      <h1>EMI Calculator</h1>
      <div className="input-group">
        <label>Loan Amount (₹):</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>
      <div className="input-group">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter interest rate"
        />
      </div>
      <div className="input-group">
        <label>Loan Tenure (Years):</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="Enter loan tenure"
        />
      </div>
      <button className="emi-btn" onClick={calculateEMI}>Calculate EMI</button>
      <div className="result">
        <h3>Monthly EMI: ₹ {emi}</h3>
      </div>
    </div>
  );
};

export default EMICalculator;