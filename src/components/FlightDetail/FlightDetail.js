/**
 * Component to display detailed information about a specific flight.
 * @module FlightDetail
 */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Error from '../Error/Error';
import './FlightDetail.css';
/**
 * FlightDetail component displays detailed information about a specific flight.
 * @returns {JSX.Element} Rendered FlightDetail component
 */
const FlightDetail = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await fetch(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch flight details.');
        }
        const data = await response.json();
        setFlight(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFlight();
  }, [id]);

  if (error) {
    return <Error message={error} />;
  }

  if (!flight) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flight-detail">
      <h2>Flight Details</h2>
      <p>Flight Number: {flight.flightNumber}</p>
      <p>Airline: {flight.airline}</p>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Time: {flight.departureTime}</p>
      <p>Status: {flight.status}</p>
      <Link to="/" className="back-button">Back to Flight Table</Link>
    </div>
  );
};

export default FlightDetail;
