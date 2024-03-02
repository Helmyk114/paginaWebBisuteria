import React, { useState } from 'react'
import { ButtonGroup, Button } from '@nextui-org/react';
import '../../../components/UI/botones/botones.css'

function BotonCantidad({ initialPrice, updatePrice }) {
  const [number, setNumber] = useState(1);

  const increaseNumber = () => {
    setNumber(number + 1);
    updatePrice(number * initialPrice);
  };

  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
      updatePrice(number * initialPrice);
    }
  }

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