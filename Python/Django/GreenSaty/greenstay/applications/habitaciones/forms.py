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

                }
            ),
            'estadoHabitacion': forms.Select(
                attrs={
                    
                }
            ),
            'usuarioHabitacion': forms.Select(
                attrs={
                    
                }
            ),
            'precioHabitacion' : forms.NumberInput(
                attrs={

                }
            )
        }