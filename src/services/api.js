import axios from 'axios';

const BASE_URL = 'https://api.frankfurter.app';

// ✅ Fetch exchange rates based on selected base currency
export const fetchRates = async (base = 'USD') => {
  try {
    const response = await axios.get(`${BASE_URL}/latest?from=${base}`);
    return response.data.rates;
  } catch (error) {
    console.error('Failed to fetch rates:', error);
    // Optional: return fallback data
    return {
      USD: 1,
      EUR: 0.93,
      GBP: 0.80,
      JPY: 151.50
    };
  }
};

// ✅ Fetch all supported currencies from the API
export const fetchCurrencies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/currencies`);
    // The API returns an object like { "USD": "US Dollar", "EUR": "Euro", ... }
    return Object.keys(response.data); // return only the currency codes
  } catch (error) {
    console.error('Failed to fetch currencies:', error);
    // Optional fallback list
    return ['USD', 'EUR', 'GBP', 'JPY'];
  }
};
