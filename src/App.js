import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Converter from './pages/Converter';

// Make sure this is a default export
const App = () => {
  return (
    <AppProvider>
      <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-yellow-900">

          <Header />
          <div className="container mx-auto p-4">
            <Converter />
          </div>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;  // This is the crucial line that was missing