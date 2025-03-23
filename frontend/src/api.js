import axios from "axios";

const API_URL = "http://localhost:5000"; // Asegúrate de que el backend está corriendo en este puerto

/**
 * Obtiene todas las páginas.
 * @returns {Promise<Array>} Lista de páginas.
 */
export const getPages = async () => {
  try {
    const response = await axios.get(`${API_URL}/pages`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las páginas:", error);
    throw error;
  }
};

/**
 * Crea una nueva página.
 * @param {Object} newPage - Datos de la nueva página.
 * @returns {Promise<Object>} Página creada.
 */
export const createPage = async (newPage) => {
  try {
    const response = await axios.post(`${API_URL}/pages`, newPage);
    return response.data;
  } catch (error) {
    console.error("Error al crear la página:", error);
    throw error;
  }
};

/**
 * Actualiza una página existente.
 * @param {string} pageId - ID de la página a actualizar.
 * @param {Object} updatedPage - Datos actualizados de la página.
 * @returns {Promise<Object>} Página actualizada.
 */
export const updatePage = async (pageId, updatedPage) => {
  try {
    const response = await axios.put(`${API_URL}/pages/${pageId}`, updatedPage);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la página:", error);
    throw error;
  }
};

/**
 * Elimina una página.
 * @param {string} pageId - ID de la página a eliminar.
 * @returns {Promise<Object>} Resultado de la eliminación.
 */
export const deletePage = async (pageId) => {
  try {
    const response = await axios.delete(`${API_URL}/pages/${pageId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la página:", error);
    throw error;
  }
};