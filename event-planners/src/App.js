import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Home from './home';
import Events from './events';
import Header from './header';
import Services from './services';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
