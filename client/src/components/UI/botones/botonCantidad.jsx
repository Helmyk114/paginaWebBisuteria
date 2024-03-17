import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from '@nextui-org/react';
import '../../../components/UI/botones/botones.css';

function BotonCantidad({ onPriceChange, onQuantityChange, precio }) {
  const [number, setNumber] = useState(1);
  const [newPrice, setNewPrice] = useState(precio);

  useEffect(() => {
    // Actualiza el precio cuando cambia el número
    const updatedPrice = number * precio;
    setNewPrice(updatedPrice);
    onPriceChange(updatedPrice);
  }, [number, precio, onPriceChange]);

  const increaseNumber = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
    onQuantityChange(newNumber); // Llama a la función onQuantityChange con el valor actualizado de la cantidad
  };

  const decreaseNumber = () => {
    if (number > 1) {
      const newNumber = number - 1;
      setNumber(newNumber);
      onQuantityChange(newNumber); // Llama a la función onQuantityChange con el valor actualizado de la cantidad
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
