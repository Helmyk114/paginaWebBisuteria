import React from 'react';
import { Card } from '@nextui-org/react'
import './styleCard.css'; 

// Componente principal
function CustomCard({ children }) {
  return (
    <div>
      <div className="gray-container">
        {children}
      </div>
    </div>
  );
};

// Componente para el contenido de la carta
function CardContent() {
  return (
    <div>
      <Card className="content-card"></Card>
    </div>
  );
};

// Componente para el icono de editar
function Completado() {
  return (
    <div className='icon'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="rgb(105, 119, 228, 1)"
        className="bi bi-check-circle-fill"
        viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
      </svg>
    </div>
  );
};

export default CustomCard;
export {
  CardContent,
  Completado
};