import React, { useState } from 'react';
import { ButtonGroup, Button } from '@nextui-org/react';
import './botones.css';

function BotonCantidad({ maxCantidad, onCantidadChange, laborPrice, setLaborPrice }) {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    if (number < maxCantidad) {
      const newNumber = number + 1;
      setNumber(newNumber);
      onCantidadChange(newNumber); // Llama a la función onCantidadChange con el nuevo número
    }
  };

  const decreaseNumber = () => {
    if (number > 1) {
      const newNumber = number - 1;
      setNumber(newNumber);
      onCantidadChange(newNumber); // Llama a la función onCantidadChange con el nuevo número
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