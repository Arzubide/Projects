from django import forms
from .models import TarjetaCredito

class Tarjeta(forms.ModelForm):
    class Meta:
        model = TarjetaCredito
        fields = (
            'titular',
            'numeroTarjeta',
            'fechaExpiracion',
            'cvv',
            'tipoTarjeta',
        )
