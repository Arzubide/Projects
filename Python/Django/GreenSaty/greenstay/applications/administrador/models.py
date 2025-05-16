from django.db import models
from applications.areas.models import AreasHotel

class RegistroPersonal(models.Model):
    area = models.ForeignKey(
        AreasHotel,
        on_delete= models.CASCADE,
        related_name='empleados'
    )
    nombres = models.CharField(max_length=25)
    apellidos = models.CharField(max_length=25)
    correo = models.EmailField()
    gerenteArea = models.BooleanField(default=False)
    

    def __str__(self):
        return f'{self.nombres} {self.apellidos}'

    def es_supervisor(self):
        """Verifica si este empleado es supervisor de alguna área."""
        return AreasHotel.objects.filter(supervisor=self).exists()
     
    