import React, { useState, useEffect } from 'react';
import { getReservationsByUserEndpoint } from '/src/api/endpoints';
import {useParams}  from 'react-router';



const Reservas = () => {
  const {id} = useParams();
  const [userReservations, setUserReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const userRes = await fetch(getReservationsByUserEndpoint({ id}));
        const userResData = await userRes.json();
        console.log('User reservations data:', userResData); // Log the response data
        if (Array.isArray(userResData)) { // Check if the response data is an array
          setUserReservations(userResData);
        } else {
          console.error('Expected an array but received:', userResData);
        }
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h2>User Reservations</h2>
      {Array.isArray(userReservations) && userReservations.map(reservation => ( // Check if userReservations is an array before calling map
        <div key={reservation.id}>{/* Render reservation details here */}</div>
      ))}
    </div>
  );
};

export default Reservas;