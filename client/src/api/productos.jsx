import axios from "axios";

const raizUrl = process.env.REACT_APP_API_URL;

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

//Función para comunicar el front con el back usando dos parametros
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

async function cambiarEstadoInformacionApi(endPoint, id, estado) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.put(`${url}/${id}/${estado}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

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

export {
  añadirInformacionAPI,
  añadirInformacionSinImagenAPI,
  listarInformacionApi,
  listarInformacionConParametroApi,
  listarInformacionConDosParametroApi,
  cambiarEstadoInformacionApi,
  detalleInformacionApi,
  actualizarInformacionApi,
  actualizarInformacionSinImagenApi
};