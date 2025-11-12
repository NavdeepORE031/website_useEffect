import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

function App() {
  
  
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Products" element={<Products />} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
