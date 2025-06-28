import { useState, useEffect } from 'react';
import CurrencyInput from '../components/CurrencyInput';
import CurrencySelector from '../components/CurrencySelector';
import { useAppContext } from '../context/AppContext';

const Converter = () => {
  const { currencies, rates, loading, error } = useAppContext();
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    if (!rates || !rates[fromCurrency] || !rates[toCurrency]) return;
    
    const rate = rates[toCurrency] / rates[fromCurrency];
    setConvertedAmount((amount * rate).toFixed(4));
  }, [amount, fromCurrency, toCurrency, rates]);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;
  if (!rates) return <div className="text-center p-4">Exchange rates not available</div>;
  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-blue-600 to-black rounded-lg shadow-md">

      <h1 className="text-2xl font-bold mb-6 text-center">Currency Converter</h1>
      
      <CurrencyInput 
        amount={amount} 
        onAmountChange={setAmount} 
      />
      
      <div className="flex justify-between my-4">
        <CurrencySelector 
          currency={fromCurrency} 
          onCurrencyChange={setFromCurrency} 
          currencies={currencies} 
          label="From"
        />
        
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>
        
        <CurrencySelector 
          currency={toCurrency} 
          onCurrencyChange={setToCurrency} 
          currencies={currencies} 
          label="To"
        />
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-600">Converted Amount</p>
        <p className="text-2xl font-semibold">
          {convertedAmount} {toCurrency}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          1 {fromCurrency} = {(rates[toCurrency] / rates[fromCurrency]).toFixed(6)} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default Converter;