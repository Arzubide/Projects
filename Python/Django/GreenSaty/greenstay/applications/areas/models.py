from django.db import models


class AreasHotel(models.Model):

    ESTADOS = [
        ('Disponible','Disponible'),
        ('Inhabilitada', 'Inhabilitada')
    ]

    nombreArea = models.CharField(max_length=50, unique=True)
    estado = models.BooleanField(default='Inhabilitada', blank=True, choices=ESTADOS)
    horarioFuncionamiento = models.CharField(max_length=15)

    def __str__(self):
        return (f'{self.nombreArea}')