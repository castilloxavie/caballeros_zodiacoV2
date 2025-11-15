from app.databases import db
from app.models.caballeros import Caballeros


class CaballerosServices:
    collection = db["caballeros"]
    
    # Método de crear caballeros
    def crear_caballeros(self, data):
        caballeros = Caballeros(**data)
        self.collection.insert_one(caballeros.to_dictionario())
        return {"message": "Caballero creado exitosamente"}
    
    # Método para listar todos los caballeros
    def listar_caballeros(self):
        return list(self.collection.find({}, {"_id": 0}))
    
    # Método para obtener un caballero por  (nombre)
    def obtener_caballero(self, nombre):
        caballero = self.collection.find_one({"nombre": nombre}, {"_id": 0})
        return caballero
    
    # Método para actualizar un caballero por nombre
    def actualizar_caballero(self, nombre, data):
        resultado = self.collection.update_one(
            {"nombre": nombre},
            {"$set": data}
        )
        if resultado.matched_count:
            return {"message": "Caballero actualizado exitosamente"}
        else:
            return {"message": "Caballero no encontrado"}
        
    # Método para eliminar un caballero por nombre
    def eliminar_caballero(self, nombre):
        self.collection.delete_one({"nombre": nombre})
        return {"message": "Caballero eliminado exitosamente"}