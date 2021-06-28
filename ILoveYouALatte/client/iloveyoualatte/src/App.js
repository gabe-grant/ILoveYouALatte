import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import ApplicationViews from './components/ApplicationViews';
import { CustomerProvider } from './providers/CustomerProvider';

function App() {
  return (
    <Router>
       <CustomerProvider>
         <ApplicationViews />
         <Header /> 
       </CustomerProvider>
    </Router>
  );
}

export default App;
