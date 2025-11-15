import axios from 'axios';

// URL del servidor unificado
const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://caballeros-zodiacov2-unified.onrender.com'
  : 'http://localhost:3000';

// URLs de los microservicios (usando el servidor unificado)
const BASE_URLS = {
  list: BASE_URL,
  create: BASE_URL,
  listByName: BASE_URL,
  update: BASE_URL,
  delete: BASE_URL,
};

// Función para obtener todos los caballeros
export const getCaballeros = async () => {
  try {
    const response = await axios.get(`${BASE_URLS.list}/caballeros/`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener caballeros:', error);
    throw error;
  }
};

// Función para obtener un caballero por nombre
export const getCaballeroByName = async (nombre) => {
  try {
    const response = await axios.get(`${BASE_URLS.listByName}/caballeros/${nombre}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener caballero:', error);
    throw error;
  }
};

// Función para crear un caballero
export const createCaballero = async (caballero) => {
  try {
    const response = await axios.post(`${BASE_URLS.create}/caballeros/`, caballero);
    return response.data;
  } catch (error) {
    console.error('Error al crear caballero:', error);
    throw error;
  }
};

// Función para actualizar un caballero
export const updateCaballero = async (nombre, caballero) => {
  try {
    const response = await axios.put(`${BASE_URLS.update}/caballeros/${nombre}`, caballero);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar caballero:', error);
    throw error;
  }
};

// Función para eliminar un caballero
export const deleteCaballero = async (nombre) => {
  try {
    const response = await axios.delete(`${BASE_URLS.delete}/caballeros/${nombre}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar caballero:', error);
    throw error;
  }
};
