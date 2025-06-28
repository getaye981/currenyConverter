import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Currency Exchange</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600">
                Converter
              </Link>
            </li>
            <li>
              <Link to="/rates" className="text-gray-600 hover:text-blue-600">
                Rates
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="text-gray-600 hover:text-blue-600">
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;