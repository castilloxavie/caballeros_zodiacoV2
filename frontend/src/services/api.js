import axios from 'axios';

// URLs de los microservicios
// Usa el servidor unificado en desarrollo y producción
// Versión: 1.0 - Servidor unificado activado
const UNIFIED_URL = 'http://localhost:3000';
const PROD_URL = 'https://caballeros-zodiacov2-unified.onrender.com';
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const BASE_URLS = {
  list: IS_DEVELOPMENT ? UNIFIED_URL : PROD_URL,
  create: IS_DEVELOPMENT ? UNIFIED_URL : PROD_URL,
  listByName: IS_DEVELOPMENT ? UNIFIED_URL : PROD_URL,
  update: IS_DEVELOPMENT ? UNIFIED_URL : PROD_URL,
  delete: IS_DEVELOPMENT ? UNIFIED_URL : PROD_URL,
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