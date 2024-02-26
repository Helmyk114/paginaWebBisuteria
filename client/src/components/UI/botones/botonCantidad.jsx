import { ButtonGroup, Button} from '@nextui-org/react';

import React, {useState}from 'react'
import '../../../components/UI/botones/botones.css'


function BotonCantidad() {
  const [number, setNumber] = useState(0);
 
   const increaseNumber = () => {
     setNumber(number + 1);
   };
 
   const decreaseNumber = () => {
     if (number > 0) {
       setNumber(number - 1);
     }}
  return (
    <div className='btnCan' >
     
     <ButtonGroup >

     
     <Button variant="ghost" className='btnmm' onClick={decreaseNumber}>-</Button>
    
     
     <Button isDisabled className='numero' 
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      
     >{number}</Button>
     
     <Button  className='btnm' variant="ghost" onClick={increaseNumber}>+</Button>
     </ButtonGroup>
     
    
    </div>
  )
}

export default BotonCantidad