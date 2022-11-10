import Quote from './Components/Quote.tsx'
import Navigation from './Components/nav.tsx';
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      

      <Router> 
        <Navigation />
        <Routes>
          {/* <Route path="/" element={ <Home titleAnimation={ titleAnimation } /> } /> */}
          <Route path="/Quote" element={ <Quote /> } />
          {/* <Route path="/Contact" element={ <Contact titleAnimation={ titleAnimation } /> } /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
