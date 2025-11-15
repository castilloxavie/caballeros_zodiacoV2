import axios from 'axios';

// URLs de los microservicios
const BASE_URLS = {
  list: 'http://localhost:3001',
  create: 'http://localhost:3002',
  listByName: 'http://localhost:3003',
  update: 'http://localhost:3004',
  delete: 'http://localhost:3005',
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