import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Notificaciones= () => {
  const [newOrder, setNewOrder] = useState(null);

  useEffect(() => {
    const socket = io('http://localhost:4141'); // Reemplaza la URL con la URL de tu servidor

    socket.on('newOrder', (order) => {
      // Maneja la nueva orden aquí
      setNewOrder(order);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Notificaciones prueba</h1>
      {newOrder && (
        <div>
          <h2>Nueva orden recibida:</h2>
          <p>ID de orden: {newOrder.idOrder}</p>
          {/* Mostrar más detalles de la orden si es necesario */}
        </div>
      )}
    </div>
  );
};

export default Notificaciones;
