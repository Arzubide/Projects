from django import forms
from .models import Habitacion

class ModeloHabitacion(forms.ModelForm):
    class Meta:
        model = Habitacion
        fields = (
            'numeroHabitacion',
            'nivelHabitacion',
            'estadoHabitacion',
            'usuarioHabitacion',
            'precioHabitacion'
        )

        widgets = {
            'numeroHabitacion' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresa tu nombre(s)',
                    'class': 'form-control',
                    'id' : ''
                }
            ),
            'nivelHabitacion': forms.Select(
                attrs={

                    'class': 'form-select',
                    'id' : ''
                }
            ),
            'estadoHabitacion': forms.Select(
                attrs={

                    'class': 'form-select',
                    'id' : ''
                }
            ),
            'usuarioHabitacion': forms.Select(
                attrs={

                    'class': 'form-select',
                    'id' : ''
                }
            ),
            'precioHabitacion' : forms.NumberInput(
                attrs={
                    'placeholder' : 'Ingresa el precio de la habitacion',
                    'class': 'form-control',
                    'id' : ''
                }
            )
        }