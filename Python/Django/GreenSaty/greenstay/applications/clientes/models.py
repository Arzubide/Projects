from django.db import models
from applications.users.models import Usuarios

class TarjetaCredito(models.Model):
    BANCO = [
        ('VISA','Visa'),
        ('MASTERCARD', 'Mastercard'),
        ('AMEX', 'American Express')
    ]
    
    usuario = models.ForeignKey(
        Usuarios,
        on_delete=models.CASCADE
    )

    titular = models.CharField(max_length=50)
    numeroTarjeta = models.CharField(max_length=16)
    fechaExpiracion = models.CharField(max_length=7) #Formato MM/AAAA
    cvv = models.CharField(max_length=3)
    tipoTarjeta = models.CharField(choices=BANCO, max_length=20,default='VISA')
    fecha_registro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.tipoTarjeta} - **** **** **** {self.numeroTarjeta[-4:]} - Titular {self.titular}'
    
    def metodoPago(self):
        return (f'{self.tipoTarjeta} - **** **** **** {self.numeroTarjeta[-4:]}')
    
    def Terminacion(self):
        return f'**** **** **** {self.numeroTarjeta[-4:]}'


