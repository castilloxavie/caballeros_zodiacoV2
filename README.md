# Caballeros del Zodiaco

[![Python](https://img.shields.io/badge/Python-3.8+-blue?style=flat-square&logo=python)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.121.1-green?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.15.3-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

Una aplicación web completa para gestionar los Caballeros del Zodiaco, inspirada en la famosa serie de anime y manga. Esta aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los caballeros, con un backend basado en microservicios usando FastAPI y un frontend moderno construido con React.

## 🎬 Demo del Proyecto

[![Ver demo en YouTube](https://img.youtube.com/vi/Z05sRQJOe60/0.jpg)](https://youtu.be/Z05sRQJOe60)

> ▶️ **Mirar el video:** Haz clic en la imagen para ver la demostración completa.
>
> **Importante:** Lee con atención el paso a paso en el archivo `README.md` para seguir correctamente la instalación.


## Características

- **Gestión completa de Caballeros**: Crear, listar, ver detalles, editar y eliminar caballeros del zodiaco.
- **Arquitectura de Microservicios**: Backend dividido en servicios independientes para cada operación CRUD, con opción de servidor unificado.
- **Interfaz de Usuario Moderna**: Frontend responsivo con tema cósmico inspirado en el universo de los Caballeros del Zodiaco.
- **Base de Datos NoSQL**: Uso de MongoDB para almacenamiento de datos.
- **API RESTful**: Endpoints bien documentados con FastAPI.
- **Imágenes de Caballeros**: Soporte para imágenes de caballeros almacenadas localmente.

## Tecnologías Utilizadas

### Backend
- **FastAPI**: Framework web asíncrono para construir APIs REST.
- **MongoDB**: Base de datos NoSQL para almacenamiento de caballeros.
- **Motor**: Driver asíncrono para MongoDB.
- **Pydantic**: Validación de datos y modelos.
- **Uvicorn**: Servidor ASGI para ejecutar aplicaciones FastAPI.
- **CORS**: Middleware para permitir solicitudes desde el frontend.

### Frontend
- **React**: Biblioteca para construir interfaces de usuario.
- **React Router**: Navegación entre páginas.
- **Axios**: Cliente HTTP para consumir la API.
- **CSS3**: Estilos con tema cósmico y animaciones.

## Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes componentes:

- **Python 3.8+**: Para el backend.
- **Node.js 16+**: Para el frontend.
- **MongoDB**: Base de datos. Puedes instalarlo localmente o usar MongoDB Atlas (en la nube).
- **Git**: Para clonar el repositorio.

## Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/castilloxavie/caballeros_zodiacoV2.git
cd caballeros_zodiacoV2
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del directorio `backend/` con las siguientes variables:

```env
MONGO_URL=mongodb://localhost:27017  # O tu URL de MongoDB Atlas
PUERTO_SERVIDOR_CONSULTA=3001
PUERTO_SERVIDOR_INSERCION=3002
PUERTO_SERVIDOR_CONSULTA_NOMBRE=3003
PUERTO_SERVIDOR_ACTUALIZACION=3004
PUERTO_SERVIDOR_ELIMINACION=3005
PUERTO_SERVIDOR_UNIFICADO=3007
```

### 3. Configurar Entorno Virtual y Instalar Dependencias del Backend

Para evitar conflictos con otras instalaciones de Python, se recomienda crear y activar un entorno virtual antes de instalar las dependencias.

Navega al directorio `backend` y configura el entorno virtual:

```bash
cd backend
python -m venv venv
```

Activa el entorno virtual:

- **En Windows (Command Prompt)**:
  ```bash
  venv\Scripts\activate
  ```

- **En Windows (PowerShell)**:
  ```bash
  venv\Scripts\Activate.ps1
  ```

- **En Linux/Mac**:
  ```bash
  source venv/bin/activate
  ```

Una vez activado el entorno virtual (verás `(venv)` en el prompt), instala las dependencias:

```bash
pip install -r requirements.txt
```

**Nota**: Asegúrate de activar el entorno virtual cada vez que trabajes en el proyecto backend.

### 4. Instalar Dependencias del Frontend

Navega al directorio `frontend` e instala las dependencias:

```bash
cd ../frontend
npm install
```

### 5. Configurar MongoDB

Asegúrate de que MongoDB esté ejecutándose. Si usas MongoDB local:

```bash
# En Windows (como administrador)
net start MongoDB

# O en Linux/Mac
sudo systemctl start mongod
```

La aplicación creará automáticamente la base de datos `caballeros_zodiaco_db` y la colección `caballeros`.

## Ejecución de la Aplicación

Tienes dos opciones para ejecutar el backend: usando microservicios separados o un servidor unificado. El frontend es el mismo en ambos casos.

### Opción 1: Microservicios Separados (Recomendado para Desarrollo)

Esta opción ejecuta cada operación CRUD en un microservicio independiente, lo que permite escalabilidad y mantenimiento modular.

#### Ejecutar Microservicios del Backend

Abre terminales separadas para cada microservicio:

```bash
# Terminal 1: Microservicio de Listado
cd backend/app/list
python main.py

# Terminal 2: Microservicio de Creación
cd backend/app/create
python main.py

# Terminal 3: Microservicio de Consulta por Nombre
cd backend/app/list_by_name
python main.py

# Terminal 4: Microservicio de Actualización
cd backend/app/update
python main.py

# Terminal 5: Microservicio de Eliminación
cd backend/app/delete
python main.py
```

Los microservicios estarán disponibles en:
- Listado: http://localhost:3001
- Creación: http://localhost:3002
- Consulta por Nombre: http://localhost:3003
- Actualización: http://localhost:3004
- Eliminación: http://localhost:3005
- Unificado de microservicios: http://localhost:3007/docs


#### Ejecutar el Frontend

En una nueva terminal:

```bash
cd frontend
npm start
```

El frontend estará disponible en: http://localhost:3000

### Opción 2: Servidor Unificado

Esta opción ejecuta todas las operaciones en un solo servidor, ideal para entornos de producción o pruebas simples.

#### Ejecutar Servidor Unificado del Backend

```bash
cd backend/app/unified
python main.py
```

El servidor unificado estará disponible en: http://localhost:3000

**Nota**: Si usas el servidor unificado, actualiza las URLs en `frontend/src/services/api.js` para apuntar a `http://localhost:3000` en lugar de los puertos separados.

#### Ejecutar el Frontend

```bash
cd frontend
npm start
```

El frontend estará disponible en: http://localhost:3000 (asegúrate de que el backend unificado no esté usando el mismo puerto).

## Uso de la Aplicación

1. **Accede al Frontend**: Abre http://localhost:3000 en tu navegador.

2. **Ver Lista de Caballeros**: En la página principal, verás una lista de todos los caballeros con sus imágenes y detalles básicos.

3. **Crear un Nuevo Caballero**:
   - Haz clic en "Crear Caballero".
   - Completa el formulario con nombre, signo, armadura, rango, planeta y URL de imagen.
   - Haz clic en "Crear".

4. **Ver Detalles**: Haz clic en "Ver Detalle" en cualquier caballero para ver información completa.

5. **Editar Caballero**: Haz clic en "Editar" para modificar la información de un caballero existente.

6. **Eliminar Caballero**: Haz clic en "Eliminar" y confirma la acción.

## API Endpoints

### Microservicios Desplegados (Render)

- **GET https://caballeros-zodiacov2-list.onrender.com/caballeros/**: Lista todos los caballeros.
- **POST https://caballeros-zodiacov2-create.onrender.com/caballeros/**: Crea un nuevo caballero.
- **GET https://caballeros-zodiacov2-list-name.onrender.com/caballeros/{nombre}**: Obtiene un caballero por nombre.
- **PUT https://caballeros-zodiacov2-1.onrender.com/caballeros/{nombre}**: Actualiza un caballero por nombre.
- **DELETE https://caballeros-zodiacov2-delete.onrender.com/caballeros/{nombre}**: Elimina un caballero por nombre.

### Servidor Unificado (Local)

- **GET /caballeros/**: Lista todos los caballeros.
- **POST /caballeros/**: Crea un nuevo caballero.
- **GET /caballeros/{nombre}**: Obtiene un caballero por nombre.
- **PUT /caballeros/{nombre}**: Actualiza un caballero por nombre.
- **DELETE /caballeros/{nombre}**: Elimina un caballero por nombre.

### Esquema de Datos

Cada caballero tiene la siguiente estructura:

```json
{
  "nombre": "string",
  "signo": "string",
  "armadura": "string",
  "rango": "string",
  "planeta": "string",
  "url_imagen": "string"
}
```

## Documentación de la API

FastAPI proporciona documentación automática de la API. Accede a:

- **Servidor Unificado**: http://localhost:3000/docs
- **Microservicios Individuales**: http://localhost:{puerto}/docs (reemplaza {puerto} con el puerto correspondiente)

## Desarrollo

### Estructura del Proyecto

```
caballeros_zodiacoV2/
├── backend/
│   ├── app/
│   │   ├── create/
│   │   ├── delete/
│   │   ├── list/
│   │   ├── list_by_name/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── unified/
│   │   ├── databases.py
│   │   └── main.py
│   ├── requirements.txt
│   └── .gitignore
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

### Scripts Disponibles

#### Backend
- Ejecutar un microservicio específico: `python main.py` desde el directorio del microservicio.

#### Frontend
- `npm start`: Ejecuta la aplicación en modo desarrollo.
- `npm build`: Construye la aplicación para producción.
- `npm test`: Ejecuta las pruebas.
- `npm eject`: Expone la configuración de build (irreversible).

## Contribución

1. Fork el proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`).
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Push a la rama (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa la documentación de FastAPI y React.
2. Verifica que todas las dependencias estén instaladas correctamente.
3. Asegúrate de que MongoDB esté ejecutándose.
4. Revisa los logs de la consola para errores.

¡Disfruta explorando el mundo de los Caballeros del Zodiaco! 🛡️⚔️
