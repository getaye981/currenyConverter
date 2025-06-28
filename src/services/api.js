import axios from 'axios';

const BASE_URL = 'https://api.frankfurter.app/latest';

export const fetchRates = async (base = 'USD') => {
  try {
    const response = await axios.get(`${BASE_URL}?from=${base}`);
    return response.data.rates;
  } catch (error) {
    console.error('Failed to fetch rates:', error);
    return {
      USD: 1,
      EUR: 0.93,
      GBP: 0.80,
      JPY: 151.50
    };
  }
};

// Simplified version without unreachable code
export const fetchCurrencies = () => {
  return Promise.resolve(['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD']);
};

// Alternative if you need error handling:
/*
export const fetchCurrencies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/currencies`);
    return Object.keys(response.data);
  } catch (error) {
    console.error('Failed to fetch currencies:', error);
    return ['USD', 'EUR', 'GBP', 'JPY'];
  }
};
*/