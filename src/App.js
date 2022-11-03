import './App.css';
import Calculator from './Components/calculator.jsx'
import Navigation from './Components/nav';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      

      <Router> 
        <Navigation />
        <Routes>
          {/* <Route path="/" element={ <Home titleAnimation={ titleAnimation } /> } /> */}
          <Route path="/Calculator" element={ <Calculator /> } />
          {/* <Route path="/Contact" element={ <Contact titleAnimation={ titleAnimation } /> } /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
