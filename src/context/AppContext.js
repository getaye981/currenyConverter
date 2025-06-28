import { createContext, useContext, useEffect, useState } from 'react';
import { fetchRates, fetchCurrencies } from '../services/api';

// Create context
const AppContext = createContext();

// Create provider component
export const AppProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState(['USD', 'EUR']);
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);
        const [currencyList, exchangeRates] = await Promise.all([
          fetchCurrencies(),
          fetchRates(baseCurrency),
        ]);
        
        setCurrencies(currencyList);
        setRates(exchangeRates);
        setError(null);
      } catch (err) {
        setError(err.message);
        // Fallback data
        setRates({
          USD: 1,
          EUR: 0.93,
          GBP: 0.80
        });
        setCurrencies(['USD', 'EUR', 'GBP']);
      } finally {
        setLoading(false);
      }
    };
    
    initData();
  }, [baseCurrency]);

  const addFavorite = (pair) => {
    if (!favorites.includes(pair)) {
      setFavorites([...favorites, pair]);
    }
  };

  const removeFavorite = (pair) => {
    setFavorites(favorites.filter(item => item !== pair));
  };

  return (
    <AppContext.Provider
      value={{
        baseCurrency,
        setBaseCurrency,
        currencies,
        rates,
        loading,
        error,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create custom hook
export const useAppContext = () => useContext(AppContext);