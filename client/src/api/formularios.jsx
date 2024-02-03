import axios from "axios";

const raizUrl = process.env.REACT_APP_API_URL;

async function infoComboBox(endPoint) {

  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error en la API info comboBox:", error);
    return [];
  }
};

export {
  infoComboBox
}