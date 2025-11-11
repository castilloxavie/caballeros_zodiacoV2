from fastapi import APIRouter
from app.schemas.caballeros_schema import CaballerosSchema
from app.services.caballeros_services import CaballerosServices

router = APIRouter(prefix="/caballeros", tags=["Caballeros"])
services = CaballerosServices()

# Ruta para crear un caballero
@router.post("/")
def crear_caballero(caballero: CaballerosSchema):
    return services.crear_caballeros(caballero.dict())


# Ruta para listar todos los caballeros
@router.get("/")
def listar_caballeros():
    return services.listar_caballeros()


# Ruta para obtener un caballero por nombre
@router.get("/{nombre}")
def obtener_caballero(nombre: str):
    return services.obtener_caballero(nombre)


# Ruta para actualizar un caballero por nombre
@router.put("/{nombre}")
def actualizar_caballero(nombre: str, caballero: CaballerosSchema):
    return services.actualizar_caballero(nombre, caballero.dict())


# Ruta para eliminar un caballero por nombre
@router.delete("/{nombre}")
def eliminar_caballero(nombre: str):
    return services.eliminar_caballero(nombre)