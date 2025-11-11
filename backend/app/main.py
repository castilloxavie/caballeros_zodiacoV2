from fastapi import FastAPI
from app.routes.caballeros_routes import router as caballeros_router

app = FastAPI(
    title="API de Caballeros del Zodiaco",
    description="API para gestionar los caballeros del zodiaco", 
    version="1.0.0"
)

app.include_router(caballeros_router)