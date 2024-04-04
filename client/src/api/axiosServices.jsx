import axios from "axios";

const raizUrl = process.env.REACT_APP_API_URL;

//Función para enviar infomación desde el front hacia el back con imagen
async function añadirInformacionAPI(producto, endPoint) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.post(url, producto, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data
  } catch (error) {
    console.log("Error en la API crear: ", error);
    throw error
  }
};

//Función para enviar infomación desde el front hacia el back sin imagen
async function añadirInformacionSinImagenAPI(producto, endPoint) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.post(url, producto);
    return response.data
  } catch (error) {
    console.log("Error en la API crearSinImgen: ", error);
    throw error
  }
};

//Función para mostrar información desde el back hacia el front
async function listarInformacionApi(endPoint) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error en al API listar:", error);
    return [];
  }
};

//Función para mostrar información desde el back hacia el front usando un parametro
async function listarInformacionConParametroApi(endPoint, parametro) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.get(`${url}/${parametro}`);
    return response.data;
  } catch (error) {
    console.error("Error en al API listar con parametro:", error);
    return [];
  }
};

//Función para mostrar información desde el back hacia el front usando dos parametros
async function listarInformacionConDosParametroApi(endPoint, parametro1, parametro2) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.get(`${url}/${parametro1}/${parametro2}`);
    return response.data;
  } catch (error) {
    console.error("Error en al API listar con 2 parametro:", error);
    return [];
  }
};

//Función para actualizar el estado desde el front hacia el back
async function cambiarEstadoInformacionApi(endPoint, id, estado) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.put(`${url}/${id}/${estado}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Función para mostrar la información en detalle en el front desde el back
async function detalleInformacionApi(endPoint, id) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error en al API listarDetalle:", error);
    return [];
  }
};

//Función para actualizar la información desde el front hacia el back con imagen
async function actualizarInformacionApi(endPoint, id, informacion){
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.put(`${url}/${id}`,informacion, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if(response.status === 200){
      console.log('Se actualizo la informacion api');
    } else {
      console.error(response.data.error);
    }
  } catch (error) {
    console.error(`Error en la Api actualizar: ${error.message}`);
  }
};

//Función para actualizar la información desde el front hacia el back sin imagen
async function actualizarInformacionSinImagenApi(endPoint, id, informacion){
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.put(`${url}/${id}`,informacion);
    if(response.status === 200){
      console.log('Se actualizo la informacion api');
    } else {
      console.error(response.data.error);
    }
  } catch (error) {
    console.error(`Error en la Api actualizar: ${error.message}`);
  }
};

//Función para eliminar la información desde el front hacia el back
async function eliminarInformacionApi(endPoint, id) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.delete(`${url}/${id}`);
    if(response.status === 200){
      console.log('Se elimino la informacion api');
    } else {
      console.error(response.data.error);
    }
  } catch (error) {
    console.error(`Error en la Api eliminar: ${error.message}`);
  }
};

export {
  añadirInformacionAPI,
  añadirInformacionSinImagenAPI,
  listarInformacionApi,
  listarInformacionConParametroApi,
  listarInformacionConDosParametroApi,
  cambiarEstadoInformacionApi,
  detalleInformacionApi,
  actualizarInformacionApi,
  actualizarInformacionSinImagenApi,
  eliminarInformacionApi
};