import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import ApplicationViews from './components/ApplicationViews';
import { CustomerProvider } from './providers/CustomerProvider';
import { DrinkOrderProvider } from './providers/DrinkOrderProvider';

function App() {
  return (
    <Router>
      <CustomerProvider>
        <DrinkOrderProvider>
          <Header /> 
          <ApplicationViews />
        </DrinkOrderProvider>
      </CustomerProvider>
    </Router>
  );
}

export default App;
