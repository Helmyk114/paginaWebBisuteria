import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from '@nextui-org/react';
import '../../../components/UI/botones/botones.css';

function BotonCantidad({ onPriceChange, precio }) {
  const [number, setNumber] = useState(1);
  const [newPrice, setNewPrice] = useState(precio);

  useEffect(() => {
    const updatedPrice = number * precio;
    setNewPrice(updatedPrice);
    onPriceChange(updatedPrice);
  }, [number, precio, onPriceChange]);

  const increaseNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(prevNumber => prevNumber - 1);
    }
  };

  return (
    <div className='btnCan'>
      <ButtonGroup>
        <Button variant="ghost" className='btnmm' onClick={decreaseNumber}>
          -
        </Button>
        <Button isDisabled className='numero'>
          {number}
        </Button>
        <Button className='btnm' variant="ghost" onClick={increaseNumber}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default BotonCantidad; 
