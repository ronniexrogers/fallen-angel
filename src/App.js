import Quote from './Components/Quote.tsx'
import Navigation from './Components/nav.tsx';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      

      <Router> 
        <Navigation />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Quote" element={ <Quote /> } />
          <Route path="/Contact" element={ <Contact /> } />
          <Route path="/Gallery" element={ <Gallery /> } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
