
import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout.js'
import Login from './Login.js'



function App() {
  return (
    <Router>
    <div className="app">  
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path='/checkout' element={[<Header />, <Checkout />]}></Route>
        <Route exact path='/' element={[<Header />, <Home />]}></Route> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;

