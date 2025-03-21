import axios from "axios";

const API_URL = "http://localhost:5000"; // Asegúrate de que el backend está corriendo en este puerto

// ✅ Exportar getPages
export const getPages = async () => {
  try {
    const response = await axios.get(`${API_URL}/pages`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las páginas:", error);
    return [];
  }
};

// ✅ Exportar createPage
export const createPage = async (newPage) => {
  try {
    const response = await axios.post(`${API_URL}/pages`, newPage);
    return response.data;
  } catch (error) {
    console.error("Error al crear la página:", error);
  }
};

// ✅ Exportar updatePage
export const updatePage = async (pageId, updatedPage) => {
  try {
    const response = await axios.put(`${API_URL}/pages/${pageId}`, updatedPage);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la página:", error);
  }
};

// ✅ Exportar deletePage
export const deletePage = async (pageId) => {
  try {
    const response = await axios.delete(`${API_URL}/pages/${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la página:", error);
  }
};