import axios from 'axios';

const API_KEY = 'a5a926d569e98aeeeb4aaa7b'; // Get a free key from https://www.exchangerate-api.com/
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

export const fetchRates = async (base = 'USD') => {
  try {
    const response = await axios.get(`${BASE_URL}/${base}`);
    return response.data.conversion_rates;
  } catch (error) {
    console.error('Failed to fetch rates:', error);
    // Fallback rates
    return {
      USD: 1,
      EUR: 0.93,
      GBP: 0.80,
      JPY: 151.50,
      AUD: 1.52,
      CAD: 1.36,
      CHF: 0.91,
      CNY: 7.24,
      INR: 83.45,
      BRL: 5.12
      // Add more fallback rates as needed
    };
  }
};

export const fetchCurrencies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/USD`);
    return Object.keys(response.data.conversion_rates);
  } catch (error) {
    console.error('Failed to fetch currencies:', error);
    return ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'BRL', 'SEK', 'NZD'];
  }
};