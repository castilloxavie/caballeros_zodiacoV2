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

app = FastAPI(
    title="Microservicio de Actualización de Caballeros",
    description="Microservicio para actualizar caballeros del zodiaco",
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

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PUERTO_SERVIDOR_ACTUALIZACION", 3004))
    uvicorn.run(app, host="0.0.0.0", port=port)
