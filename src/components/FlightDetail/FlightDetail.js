// src/components/FlightDetail/FlightDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
import './FlightDetail.css';

const FlightDetail = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await fetch(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        const data = await response.json();
        setFlight(data);
      } catch (error) {
        setError('Failed to fetch flight details.');
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
    </div>
  );
};

export default FlightDetail;
