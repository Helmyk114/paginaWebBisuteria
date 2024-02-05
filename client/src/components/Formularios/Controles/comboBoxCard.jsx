import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import CustomCard from '../../Card/card';
import { CardContent } from '../../Card/card';

const DropdownWithCards = ({ opciones, onSelectOption }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
    <Dropdown.Toggle style={{width:'70%'}} variant="secondary" id="dropdown-basic">
      Seleccionar opción
    </Dropdown.Toggle>

    <Dropdown.Menu style={{width:'70%'}}>
      {opciones && opciones.length > 0 ? (
        opciones.map((opcion) => (
          <Dropdown.Item  key={opcion.id} onClick={() => onSelectOption(opcion)}>
            <CustomCard>
              <CardContent />
              <p>{opcion.texto}</p>
            </CustomCard>
          </Dropdown.Item>
        ))
      ) : (
        <Dropdown.Item disabled>No hay opciones disponibles</Dropdown.Item>
      )}
    </Dropdown.Menu>
  </Dropdown>
);

};
export default DropdownWithCards;