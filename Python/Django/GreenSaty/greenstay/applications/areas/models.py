from django.db import models


class AreasHotel(models.Model):

    ESTADOS = [
        ('DISPONIBLE','Disponible'),
        ('INHABILITADA', 'Inhabilitada')
    ]

    nombreArea = models.CharField(max_length=50, unique=True)
    estado = models.CharField(max_length=20, choices=ESTADOS, default='INHABILITADA')
    horarioFuncionamiento = models.CharField(max_length=15)

    def __str__(self):
        return (f'{self.nombreArea}')