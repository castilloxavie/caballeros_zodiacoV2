import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createCaballero, updateCaballero, getCaballeroByName } from '../services/api';

const CaballerosForm = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    signo: '',
    armadura: '',
    rango: '',
    planeta: '',
    url_imagen: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCaballero = useCallback(async () => {
    try {
      const data = await getCaballeroByName(nombre);
      setFormData(data);
    } catch (err) {
      setError('Error al cargar caballero');
    }
  }, [nombre]);

  useEffect(() => {
    if (nombre) {
      fetchCaballero();
    }
  }, [nombre, fetchCaballero]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (nombre) {
        await updateCaballero(nombre, formData);
      } else {
        await createCaballero(formData);
      }
      navigate('/');
    } catch (err) {
      setError('Error al guardar caballero');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{nombre ? 'Editar Caballero' : 'Crear Caballero'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Signo:</label>
          <select name="signo" value={formData.signo} onChange={handleChange} required>
            <option value="">Seleccionar signo</option>
            <option value="Aries">Aries</option>
            <option value="Tauro">Tauro</option>
            <option value="Géminis">Géminis</option>
            <option value="Cáncer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Escorpio">Escorpio</option>
            <option value="Sagitario">Sagitario</option>
            <option value="Capricornio">Capricornio</option>
            <option value="Acuario">Acuario</option>
            <option value="Piscis">Piscis</option>
            <option value="Dragón">Dragon</option>
            <option value="Pegasus">Pegasus</option>
            <option value="Cisne">Cisne</option>
            <option value="Andrómeda">Andromeda</option>
            <option value="Fénix">Fenix</option>
            <option value="Osa Mayor">Osa Mayor</option>
          </select>
        </div>
        <div className="form-group">
          <label>Armadura:</label>
          <input type="text" name="armadura" value={formData.armadura} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Rango:</label>
          <input type="text" name="rango" value={formData.rango} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Planeta:</label>
          <input type="text" name="planeta" value={formData.planeta} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>URL Imagen (nombre del archivo en /images/):</label>
          <input type="text" name="url_imagen" value={formData.url_imagen} onChange={handleChange} placeholder="e.g., seiya.jpg" required />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Guardando...' : (nombre ? 'Actualizar' : 'Crear')}
        </button>
      </form>
    </div>
  );
};

export default CaballerosForm;
