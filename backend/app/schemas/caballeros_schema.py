from pydantic import BaseModel

class CaballerosSchema(BaseModel):
    nombre: str
    signo: str
    armadura: str
    rango: str
    planeta: str
    url_imagen: str