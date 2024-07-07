/**
 * Component to display a table of flights fetched from an API.
 * @module FlightTable
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';
import './FlightTable.css';
/**
 * FlightTable component displays a table of flights.
 * @returns {JSX.Element} Rendered FlightTable component
 */
const FlightTable = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('https://flight-status-mock.core.travelopia.cloud/flights');
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        setError('Failed to fetch flight data.');
      }
    };

    fetchFlights();
    const interval = setInterval(fetchFlights, 60000); // Fetch new data every 60 seconds

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <table className="flight-table">
      <thead>
        <tr>
          <th>Flight Number</th>
          <th>Airline</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Departure Time</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {flights.map(flight => (
          <tr key={flight.id}>
            <td>{flight.flightNumber}</td>
            <td>{flight.airline}</td>
            <td>{flight.origin}</td>
            <td>{flight.destination}</td>
            <td>{flight.departureTime}</td>
            <td>{flight.status}</td>
            <td><Link to={`/flight/${flight.id}`}>Details</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlightTable;
