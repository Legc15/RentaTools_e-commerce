import React, { useState, useEffect } from 'react';

const Reservas = () => {
  const [bookedProducts, setBookedProducts] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);

  useEffect(() => {
    // Fetch bookedProducts and previousBookings data here
    // This is just a placeholder. Replace it with actual data fetching.
    setBookedProducts([
        { id: 1, name: 'Taladro' },
        { id: 2, name: 'Generador' },
        { id: 3, name: 'Mezcladora de Concreto' },
        { id: 4, name: 'Andamios' },
        { id: 5, name: 'Herramientas Eléctricas' }
      
    ]);

    setPreviousBookings([
        { id: 1, name: 'Máquina 1', date: '2022-01-01' },
        { id: 2, name: 'Máquina 2', date: '2022-01-02' },
    
    ]);
  }, []);

  return (
    <div className="reservas-container">
      <h1>Reservas activas</h1>
      <ul>
        {bookedProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <h2>Hiatorial de Reservas</h2>
      <ul>
        {previousBookings.map(booking => (
          <li key={booking.id}>{booking.name} - {booking.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reservas;
