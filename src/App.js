// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightTable from './components/FlightTable/FlightTable';
import FlightDetail from './components/FlightDetail/FlightDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FlightTable />} />
          <Route path="/flight/:id" element={<FlightDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
