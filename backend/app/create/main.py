from fastapi import FastAPI
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

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Microservicio de Creación de Caballeros",
    description="Microservicio para crear caballeros del zodiaco",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

collection = db["caballeros"]

@app.post("/caballeros/")
def crear_caballero(caballero: CaballerosSchema):
    caballeros = Caballeros(**caballero.dict())
    collection.insert_one(caballeros.to_dictionario())
    return {"message": "Caballero creado exitosamente"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PUERTO_SERVIDOR_INSERCION", 3002))
    uvicorn.run(app, host="0.0.0.0", port=port)
