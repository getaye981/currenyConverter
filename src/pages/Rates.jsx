import { useAppContext } from '../context/AppContext';

const Rates = () => {
  const { rates, currencies, baseCurrency, setBaseCurrency } = useAppContext();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Current Exchange Rates</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Base Currency</label>
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Currency</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rates && currencies.map((currency) => (
              <tr key={currency}>
                <td className="px-6 py-4 whitespace-nowrap">{currency}</td>
                <td className="px-6 py-4 whitespace-nowrap">{rates[currency]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rates;