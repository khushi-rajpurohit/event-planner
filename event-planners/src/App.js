import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Home from './home';
import Events from './events';
import Header from './header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
