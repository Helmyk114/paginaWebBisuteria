import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from '@nextui-org/react';
import './botones.css';

function BotonCantidad() {
  const [number, setNumber] = useState(1);

  const increaseNumber = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
  };

  const decreaseNumber = () => {
    if (number > 1) {
      const newNumber = number - 1;
      setNumber(newNumber);
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
