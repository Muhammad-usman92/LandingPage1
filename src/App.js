// CSS (do not change the orders)
import './assets/css/global.scss'
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/auth/HomePage';
import Footer from './components/Footer';

// Page

function App() {
  return (
    <div className="App">  
    <NavBar />
    <HomePage />
    <Footer />
    </div>
  );
}

export default App;
