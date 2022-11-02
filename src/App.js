// CSS (do not change the orders)
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/global.scss'
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/auth/HomePage';

// Page

function App() {
  return (
    <div className="App">  
    <NavBar />   
    <HomePage />
    </div>
  );
}

export default App;
