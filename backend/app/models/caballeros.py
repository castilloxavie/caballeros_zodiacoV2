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