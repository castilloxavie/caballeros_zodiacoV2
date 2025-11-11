import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCaballeros, deleteCaballero } from '../services/api';

const CaballerosList = () => {
  const [caballeros, setCaballeros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCaballeros();
  }, []);

  const fetchCaballeros = async () => {
    try {
      const data = await getCaballeros();
      setCaballeros(data);
      setLoading(false);
    } catch (err) {
      setError('Error al cargar caballeros');
      setLoading(false);
    }
  };

  const handleDelete = async (nombre) => {
    if (window.confirm(`¿Estás seguro de eliminar a ${nombre}?`)) {
      try {
        await deleteCaballero(nombre);
        setCaballeros(caballeros.filter(c => c.nombre !== nombre));
      } catch (err) {
        alert('Error al eliminar caballero');
      }
    }
  };

  if (loading) return <p>Cargando caballeros...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Caballeros</h2>
      <div className="grid">
        {caballeros.map((caballero) => (
          <div key={caballero.nombre} className="card">
            <img src={`/images/${caballero.url_imagen}`} alt={caballero.nombre} onError={(e) => e.target.src='/images/default.jpg'} />
            <h3>{caballero.nombre}</h3>
            <p><strong>Signo:</strong> {caballero.signo}</p>
            <p><strong>Armadura:</strong> {caballero.armadura}</p>
            <p><strong>Rango:</strong> {caballero.rango}</p>
            <p><strong>Planeta:</strong> {caballero.planeta}</p>
            <Link to={`/detalle/${caballero.nombre}`} className="btn btn-primary">Ver Detalle</Link>
            <Link to={`/editar/${caballero.nombre}`} className="btn btn-secondary">Editar</Link>
            <button onClick={() => handleDelete(caballero.nombre)} className="btn btn-danger">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaballerosList;
