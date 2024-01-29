import axios from "axios";

const raizUrl = process.env.REACT_APP_API_URL;

async function añadiProductoAPI (producto, endPoint) {
  
  const url =  `${raizUrl}/${endPoint}`

  await axios.post(url, producto,{
    headers: {
    'Content-Type': 'multipart/form-data',
    },
  })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log("Error en la API crear producto:", error);
  });
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

async function eliminarInformacion (endPoint, idCardWorker) {
  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.delete(`${url}/${idCardWorker}`)
    return response.data;
  } catch (error) {
    throw error;
  }
}


export { 
  añadiProductoAPI, 
  listarInformacionApi,
  eliminarInformacion
};