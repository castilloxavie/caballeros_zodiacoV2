import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Información del Desarrollador</h3>
          <p><strong>Nombre:</strong> Xavier Alberto Castillo Varon</p>
          <p><strong>Tecnólogo:</strong> Análisis y Desarrollo de Sistemas de Información</p>
          <p><strong>Contacto:</strong> 3116490366</p>
          <p><strong>WhatsApp:</strong> 3116490366</p>
          <p><strong>Email:</strong> <a href="mailto:xcastillovaron93@gmail.com">xcastillovaron93@gmail.com</a></p>
        </div>
        <div className="footer-docs">
          <h3>Documentación API</h3>
          <nav className="nav-docs">
            <a href="https://caballeros-zodiacov2-create.onrender.com/docs" target="_blank" rel="noopener noreferrer" className="btn btn-docs">Crear Docs</a>
            <a href="https://caballeros-zodiacov2-list.onrender.com/docs" target="_blank" rel="noopener noreferrer" className="btn btn-docs">Listar Docs</a>
            <a href="https://caballeros-zodiacov2-list-name.onrender.com/docs" target="_blank" rel="noopener noreferrer" className="btn btn-docs">Listar por Nombre Docs</a>
            <a href="https://caballeros-zodiacov2-1.onrender.com/docs" target="_blank" rel="noopener noreferrer" className="btn btn-docs">Actualizar Docs</a>
            <a href="https://caballeros-zodiacov2-delete.onrender.com/docs" target="_blank" rel="noopener noreferrer" className="btn btn-docs">Eliminar Docs</a>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Caballeros del Zodiaco. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
