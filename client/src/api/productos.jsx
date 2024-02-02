import axios from "axios";

const raizUrl = process.env.REACT_APP_API_URL;

async function añadirInformacionAPI (producto, endPoint) {
  
  const url =  `${raizUrl}/${endPoint}`

  try {
    const response = await axios.post(url, producto,{
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

async function listarInformacionApi (endPoint) {
  
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error en al API listar:", error);
    return [];
  }
};

async function eliminarInformacionApi (endPoint, id) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.delete(`${url}/${id}`)
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function detalleInformacionApi (endPoint, id) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error en al API listar:", error);
    return [];
  }
}


export { 
  añadirInformacionAPI, 
  listarInformacionApi,
  eliminarInformacionApi,
  detalleInformacionApi
};