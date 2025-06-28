const CurrencySelector = ({ currency, onCurrencyChange, currencies, label }) => {
    return (
      <div className="w-5/12">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CurrencySelector;