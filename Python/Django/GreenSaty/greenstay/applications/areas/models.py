from django.db import models

class AreasHotel(models.Model):
    nombreArea = models.CharField(max_length=50, unique=True)
    estado = models.BooleanField(default=False, blank=True)
    #supervisor = 
    #capacidadMaxima = models.inte
    horarioFuncionamiento = models.CharField(max_length=15)
    
    def __str__(self):
        return (f'Area: {self.nombreArea} - Estado: {self.estado}')