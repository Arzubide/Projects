from django.db import models
from applications.users.models import Usuarios

class Habitacion(models.Model):
    ESTADOS = [
        ('NO_DISPONIBLE', 'No disponible'),
        ('DISPONIBLE', 'Disponible'),
        ('RESERVADA', 'Reservada'),
        ('OCUPADA', 'Ocupada'),
    ]

    NIVELES = [
        ('STANDART', 'Standart'),
        ('DELUXE', 'Deluxe'),
        ('EJECUTIVA', 'Ejecutiva'),
        ('SUITE', 'Suite'),
        ('PRESIDENCIAL', 'Presidencial'),
    ]

    numeroHabitacion = models.CharField(max_length=10, blank=False, unique=True)
    nivelHabitacion = models.CharField(
        'Categoria',
        max_length=20,
        choices=NIVELES,
    )
    estadoHabitacion = models.CharField(
        'Estado',
        max_length=20,
        choices=ESTADOS,
        default='NO_DISPONIBLE'
    )

    usuarioHabitacion = models.ForeignKey(
        Usuarios,
        on_delete=models.SET_NULL, #Al eliminar al usuario, no se elimina la habitacion
        #Funciones para que exista la habitacion sin algun usuario
        blank=True,
        null=True
         
    )

    def __str__(self):
        return f'Habitación {self.numeroHabitacion} - {self.get_estadoHabitacion_display()}'
