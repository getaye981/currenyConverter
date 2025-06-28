import { useAppContext } from '../context/AppContext';

const Favorites = () => {
  const { favorites } = useAppContext();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Favorite Currency Pairs</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites added yet</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((pair) => (
            <li key={pair} className="p-3 bg-gray-50 rounded-md">
              {pair}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;