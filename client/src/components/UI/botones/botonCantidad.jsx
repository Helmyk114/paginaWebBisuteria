import React, { useState } from 'react'
import { ButtonGroup, Button } from '@nextui-org/react';
import '../../../components/UI/botones/botones.css'

function BotonCantidad({ onPriceChange, precio }) {
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(precio);
console.log(precio)

  const calculatePrice = () => {
    const newPrice = number * precio; // Calculate the new price based on the count and product price
    setPrice(newPrice); // Update the price state
    onPriceChange(newPrice); // Pass the new price to the parent component
  };

  const increaseNumber = () => {
    setNumber(number + 1);
    calculatePrice();
  };

  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
      calculatePrice();
    }
  };

  return (
    <div className='btnCan' >
      <ButtonGroup >
        <Button variant="ghost" className='btnmm' onClick={decreaseNumber}>-</Button>
        <Button isDisabled className='numero'
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
        >
          {number}
        </Button>
        <Button className='btnm' variant="ghost" onClick={increaseNumber}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default BotonCantidad;