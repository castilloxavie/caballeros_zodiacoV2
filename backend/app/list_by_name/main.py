from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
MONGO_URL = os.getenv("MONGO_URL")
client = MongoClient(MONGO_URL)
db = client["caballeros_zodiaco_db"]

app = FastAPI(
    title="Microservicio de Consulta por Nombre de Caballeros",
    description="Microservicio para obtener un caballero por nombre",
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

@app.get("/caballeros/{nombre}")
def obtener_caballero(nombre: str):
    caballero = collection.find_one({"nombre": nombre}, {"_id": 0})
    return caballero

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PUERTO_SERVIDOR_CONSULTA_NOMBRE", 3003))
    uvicorn.run(app, host="0.0.0.0", port=port)