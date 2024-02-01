import React,{Button} from 'react'
import '../BotonFormularios/btnFormularios.css';

const BtnFormularios = ({btnTitulo, type}) => {
  return (
    <div>
        <Button className='btn-form' type={type}>{btnTitulo}</Button>
    </div>
  )
}

export default BtnFormularios