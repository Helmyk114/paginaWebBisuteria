import React, { useEffect, useState } from "react";
import {Autocomplete, AutocompleteItem, Avatar} from "@nextui-org/react";
import { forwardRef } from "react";
import { listarInformacionApi } from "../../../../api/axiosServices.jsx";

const ListBoxCompound = forwardRef(({ apiEndpoint, idOpcion, nombre, imagen, ...prop},ref) => {

  const [opciones, setOpciones] = useState([]);
  const urlImage = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const obtenerOpciones = async () => {
      try {
        const response = await listarInformacionApi(apiEndpoint)
        setOpciones(response.data);
      } catch (error) {
        console.error('Error al obtener opciones:', error);
      }
    };
    obtenerOpciones();
  }, [apiEndpoint]);

  return (
    <Autocomplete
      defaultItems={opciones}
      variant="bordered"
      label="Assigned to"
      placeholder="Select a user"
      labelPlacement="inside"
      className="max-w-xs"
      ref={ref}
      {...prop}
    >
      {(opciones) => (
        <AutocompleteItem key={opciones[idOpcion]} textValue={`${opciones[idOpcion]}`}>
          <div className="flex gap-2 items-center">
            <Avatar alt={opciones[nombre]} className="flex-shrink-0" size="sm" src={`${urlImage}/${opciones[imagen]}`} />
              <span className="text-medium">{opciones[nombre]}</span> 
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
});

export default ListBoxCompound;