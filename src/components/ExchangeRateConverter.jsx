import React, { useState, useEffect } from 'react';
// import { Chart } from 'react-google-charts';
import {Chart} from 'react-google-charts'
import './ExchangeRateConverter.css';


const currencyDetails = {
  USD: { symbol: '$', name: 'United States Dollar' },
  EUR: { symbol: '€', name: 'Euro' },
  GBP: { symbol: '£', name: 'British Pound Sterling' },
  JPY: { symbol: '¥', name: 'Japanese Yen' },
  CAD: { symbol: 'CA$', name: 'Canadian Dollar' },
  NPR: { symbol: '₹', name: 'Nepali Rupee' },
  AUD: { symbol: 'A$', name: 'Australian Dollar' },
  INR: { symbol: '₹', name: 'Indian Rupee' },
  SGD: { symbol: 'S$', name: 'Singapore Dollar' },
  CHF: { symbol: 'CHF', name: 'Swiss Franc' },
  CNY: { symbol: 'CN¥', name: 'Chinese Yuan' },
  HKD: { symbol: 'HK$', name: 'Hong Kong Dollar' },
  KRW: { symbol: '₩', name: 'South Korean Won' },
  MXN: { symbol: 'Mex$', name: 'Mexican Peso' },
  BRL: { symbol: 'R$', name: 'Brazilian Real' },
  RUB: { symbol: '₽', name: 'Russian Ruble' },
  ZAR: { symbol: 'R', name: 'South African Rand' },
  SEK: { symbol: 'kr', name: 'Swedish Krona' },
  NOK: { symbol: 'kr', name: 'Norwegian Krone' },
  DKK: { symbol: 'kr', name: 'Danish Krone' },
  TRY: { symbol: '₺', name: 'Turkish Lira' },
  NZD: { symbol: 'NZ$', name: 'New Zealand Dollar' },
  THB: { symbol: '฿', name: 'Thai Baht' },
  IDR: { symbol: 'Rp', name: 'Indonesian Rupiah' },
  MYR: { symbol: 'RM', name: 'Malaysian Ringgit' },
  PHP: { symbol: '₱', name: 'Philippine Peso' },
  SAR: { symbol: '﷼', name: 'Saudi Riyal' },
  AED: { symbol: 'د.إ', name: 'UAE Dirham' },
  ILS: { symbol: '₪', name: 'Israeli New Shekel' },
  PLN: { symbol: 'zł', name: 'Polish Złoty' },
  CZK: { symbol: 'Kč', name: 'Czech Koruna' },
  HUF: { symbol: 'Ft', name: 'Hungarian Forint' },
  CLP: { symbol: 'CLP$', name: 'Chilean Peso' },
  COP: { symbol: 'COL$', name: 'Colombian Peso' },
  PEN: { symbol: 'S/', name: 'Peruvian Sol' },
  ARS: { symbol: 'Arg$', name: 'Argentine Peso' },
  EGP: { symbol: 'E£', name: 'Egyptian Pound' },
  NGN: { symbol: '₦', name: 'Nigerian Naira' },
  KES: { symbol: 'KSh', name: 'Kenyan Shilling' },
  PKR: { symbol: '₨', name: 'Pakistani Rupee' },
  BDT: { symbol: '৳', name: 'Bangladeshi Taka' },
  LKR: { symbol: 'Rs', name: 'Sri Lankan Rupee' },
  VND: { symbol: '₫', name: 'Vietnamese Đồng' },
  DZD: { symbol: 'د.ج', name: 'Algerian Dinar' },
  MAD: { symbol: 'د.م.', name: 'Moroccan Dirham' },
  QAR: { symbol: 'ر.ق', name: 'Qatari Riyal' },
  UAH: { symbol: '₴', name: 'Ukrainian Hryvnia' },
  RON: { symbol: 'lei', name: 'Romanian Leu' },
  HNL: { symbol: 'L', name: 'Honduran Lempira' },
  JMD: { symbol: 'J$', name: 'Jamaican Dollar' },
  // Additional currencies (less common or regional):
  XOF: { symbol: 'CFA', name: 'West African CFA Franc' },
  XAF: { symbol: 'FCFA', name: 'Central African CFA Franc' },
  TND: { symbol: 'د.ت', name: 'Tunisian Dinar' },
  ISK: { symbol: 'kr', name: 'Icelandic Króna' },
  CRC: { symbol: '₡', name: 'Costa Rican Colón' },
  GHS: { symbol: 'GH₵', name: 'Ghanaian Cedi' },
  ETB: { symbol: 'Br', name: 'Ethiopian Birr' },
  PAB: { symbol: 'B/.', name: 'Panamanian Balboa' },
  BHD: { symbol: '.د.ب', name: 'Bahraini Dinar' },
  OMR: { symbol: 'ر.ع.', name: 'Omani Rial' },
  KWD: { symbol: 'د.ك', name: 'Kuwaiti Dinar' },
  JOD: { symbol: 'JD', name: 'Jordanian Dinar' },
  FJD: { symbol: 'FJ$', name: 'Fijian Dollar' },
  BYN: { symbol: 'Br', name: 'Belarusian Ruble' },
  UYU: { symbol: '$U', name: 'Uruguayan Peso' },
  BOB: { symbol: 'Bs', name: 'Bolivian Boliviano' },
  // ... (add more as needed)
};

const ExchangeRateConverter = () => {
  const [baseAmount, setBaseAmount] = useState();
  const [targetAmount, setTargetAmount] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [rates, setRates] = useState({});
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const currencies = Object.keys(currencyDetails);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch latest rates
        const ratesResponse = await fetch(
          `https://v6.exchangerate-api.com/v6/c489b4be7f370ac62a6a293c/latest/${baseCurrency}`
        );
        const ratesData = await ratesResponse.json();
        setRates(ratesData.conversion_rates);
        
        // Fetch historical data for chart
        const endDate = new Date().toISOString().split('T')[0];
        const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        
        const historyResponse = await fetch(
          `https://v6.exchangerate-api.com/v6/c489b4be7f370ac62a6a293c/history/${baseCurrency}/${startDate}/${endDate}`
        );
        const historyData = await historyResponse.json();
        
        const chartData = Object.entries(historyData.conversion_rates)
          .filter(([date]) => date in historyData.conversion_rates)
          .map(([date, rates]) => [new Date(date), rates[targetCurrency]]);
        
        setChartData([
          ['Date', 'Rate'],
          ...chartData.sort((a, b) => a[0] - b[0]),
        ]);
        
        // Update target amount
        setTargetAmount((baseAmount * ratesData.conversion_rates[targetCurrency]).toFixed(2));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [baseCurrency, targetCurrency]);

  const handleBaseAmountChange = (e) => {
    const value = e.target.value;
    setBaseAmount(value);
    setTargetAmount((value * rates[targetCurrency]).toFixed(2));
  };

  const handleTargetAmountChange = (e) => {
    const value = e.target.value;
    setTargetAmount(value);
    setBaseAmount((value / rates[targetCurrency]).toFixed(2));
  };



  return (
    <div className="converter-container">
      <h2>Currency Converter</h2>
      
      <div className="conion-sectionvers">
        <div className="input-group">
          <div className="currency-symbol">
            {currencyDetails[baseCurrency].symbol}
          </div>
          <input
            type="number"
            value={baseAmount}
            onChange={handleBaseAmountChange}
            min="1"
          />
          <select className='currency-select'
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            disabled={isLoading}
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>
                {currencyDetails[currency].name} ({currency})
              </option>
            ))}
          </select>
        </div>

      

        <div className="input-group">
          <div className="currency-symbol">
            {currencyDetails[targetCurrency].symbol}
          </div>
          <input
            type="number"
            value={targetAmount || ''}
            onChange={handleTargetAmountChange}
          />
          <select className='currency-select'
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
            disabled={isLoading}
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>
                {currencyDetails[currency].name} ({currency})
              </option>
            ))}
          </select>
        </div>
      </div>
    

      {isLoading && <div className="loading">Loading Data...</div>}
    </div>
  );
};

export default ExchangeRateConverter;