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
    title="Microservicio de Listado de Caballeros",
    description="Microservicio para listar todos los caballeros del zodiaco",
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

@app.get("/caballeros/")
def listar_caballeros():
    return list(collection.find({}, {"_id": 0}))

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PUERTO_SERVIDOR_CONSULTA", 3001))
    uvicorn.run(app, host="0.0.0.0", port=port)