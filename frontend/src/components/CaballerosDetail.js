import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCaballeroByName } from '../services/api';

const CaballerosDetail = () => {
  const { nombre } = useParams();
  const [caballero, setCaballero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCaballero();
  }, [nombre]);

  const fetchCaballero = async () => {
    try {
      const data = await getCaballeroByName(nombre);
      setCaballero(data);
      setLoading(false);
    } catch (err) {
      setError('Error al cargar caballero');
      setLoading(false);
    }
  };

  if (loading) return <p>Cargando caballero...</p>;
  if (error) return <p>{error}</p>;
  if (!caballero) return <p>Caballero no encontrado</p>;

  return (
    <div>
      <h2>Detalle de Caballero</h2>
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <img src={`/images/${caballero.url_imagen}`} alt={caballero.nombre} onError={(e) => e.target.src='/images/default.jpg'} style={{ height: '300px', objectFit: 'contain', objectPosition: 'center' }} />
        <h3>{caballero.nombre}</h3>
        <p><strong>Signo:</strong> {caballero.signo}</p>
        <p><strong>Armadura:</strong> {caballero.armadura}</p>
        <p><strong>Rango:</strong> {caballero.rango}</p>
        <p><strong>Planeta:</strong> {caballero.planeta}</p>
      </div>
    </div>
  );
};

export default CaballerosDetail;
