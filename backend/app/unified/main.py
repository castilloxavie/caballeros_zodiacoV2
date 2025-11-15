from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
MONGO_URL = os.getenv("MONGO_URL")
client = MongoClient(MONGO_URL)
db = client["caballeros_zodiaco_db"]

class CaballerosSchema(BaseModel):
    nombre: str
    signo: str
    armadura: str
    rango: str
    planeta: str
    url_imagen: str

class Caballeros:
    def __init__(self, nombre, signo, armadura, rango, planeta, url_imagen):
        self.nombre = nombre
        self.signo = signo
        self.armadura = armadura
        self.rango = rango
        self.planeta = planeta
        self.url_imagen = url_imagen
        
    def to_dictionario(self):
        return {
            "nombre": self.nombre,
            "signo": self.signo,
            "armadura": self.armadura,
            "rango": self.rango,
            "planeta": self.planeta,
            "url_imagen": self.url_imagen
        }

app = FastAPI(
    title="Servidor Unificado de Caballeros del Zodiaco",
    description="Servidor unificado para todas las operaciones CRUD de caballeros",
    version="1.0.0",
    servers=[
        {"url": "http://localhost:3002", "description": "Servidor de Creación"},
        {"url": "http://localhost:3001", "description": "Servidor de Listado"},
        {"url": "http://localhost:3003", "description": "Servidor de Listado por Nombre"},
        {"url": "http://localhost:3004", "description": "Servidor de Actualización"},
        {"url": "http://localhost:3005", "description": "Servidor de Eliminación"},
    ]
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",
        "http://localhost:3004",
        "http://localhost:3005",
        "http://localhost:5173",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001",
        "http://127.0.0.1:3002",
        "http://127.0.0.1:3003",
        "http://127.0.0.1:3004",
        "http://127.0.0.1:3005",
        "http://127.0.0.1:5173",
        "https://caballeros-zodiaco-v2.vercel.app",
        "https://caballeros-zodiaco-v2-de2rmr2ga.vercel.app",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

collection = db["caballeros"]

# Ruta para crear un caballero
@app.post("/caballeros/")
def crear_caballero(caballero: CaballerosSchema):
    caballeros = Caballeros(**caballero.dict())
    collection.insert_one(caballeros.to_dictionario())
    return {"message": "Caballero creado exitosamente"}

# Ruta para listar todos los caballeros
@app.get("/caballeros/")
def listar_caballeros():
    return list(collection.find({}, {"_id": 0}))

# Ruta para obtener un caballero por nombre
@app.get("/caballeros/{nombre}")
def obtener_caballero(nombre: str):
    caballero = collection.find_one({"nombre": nombre}, {"_id": 0})
    return caballero

# Ruta para actualizar un caballero por nombre
@app.put("/caballeros/{nombre}")
def actualizar_caballero(nombre: str, caballero: CaballerosSchema):
    resultado = collection.update_one(
        {"nombre": nombre},
        {"$set": caballero.dict()}
    )
    if resultado.matched_count:
        return {"message": "Caballero actualizado exitosamente"}
    else:
        return {"message": "Caballero no encontrado"}
        
# Ruta para eliminar un caballero por nombre
@app.delete("/caballeros/{nombre}")
def eliminar_caballero(nombre: str):
    collection.delete_one({"nombre": nombre})
    return {"message": "Caballero eliminado exitosamente"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PUERTO_SERVIDOR_UNIFICADO", 3000))
    uvicorn.run(app, host="0.0.0.0", port=port)