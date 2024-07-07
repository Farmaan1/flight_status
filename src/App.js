/**
 * This is the main component that serves as the entry point of the application.
 * It sets up routing using React Router to navigate between the Flight Table and Flight Detail views.
 * @module App
 */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightTable from './components/FlightTable/FlightTable';
import FlightDetail from './components/FlightDetail/FlightDetail';
/**
 * Main App component
 * @returns {JSX.Element} Rendered App component
 */
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
