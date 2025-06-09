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
        widgets = {
            'tipoTarjeta': forms.Select(
                attrs = {
                    'class' : 'form-select'
                }
            ),
            'titular' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresa nombre el nombre completo',
                    'class': 'form-control',
                    'id' : ''
                }
            ),
            'numeroTarjeta' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresa el numero de tarjeta',
                    'class': 'form-control',
                    'id' : ''
                }
            ),
            'cvv' : forms.TextInput(
                attrs={
                    'placeholder' : '',
                    'class': 'form-control',
                    'id' : ''
                }
            ),
            'fechaExpiracion' : forms.TextInput(
                attrs={
                    'placeholder' : 'MM/AAAA',
                    'class': 'form-control',
                    'id' : ''
                }
            ),
        }
