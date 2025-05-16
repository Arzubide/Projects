from django.db import models
from applications.administrador.models import RegistroPersonal

class AreasHotel(models.Model):
    nombreArea = models.CharField(max_length=50, unique=True)
    estado = models.BooleanField(default=False, blank=True)
    horarioFuncionamiento = models.CharField(max_length=15)
    
    supervisor = models.ForeignKey(
        RegistroPersonal,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='areas_supervisadas',
        limit_choices_to={'gerenteArea': True}  # Solo permite seleccionar empleados que son gerentes
    )

    def __str__(self):
        return (f'Area: {self.nombreArea} - Estado: {self.estado}')