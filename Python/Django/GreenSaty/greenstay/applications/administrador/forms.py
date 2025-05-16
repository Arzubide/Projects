from django import forms
from .models import RegistroPersonal


class ModeloRegistroPersonal(forms.ModelForm):
    
    class Meta:
        model = RegistroPersonal
        fields =(
            'area',
            'nombres',
            'apellidos',
            'correo',
            'gerenteArea',
        )

        widgets = {
            'area': forms.Select(
                
            ),
            'nombres' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresa tu nombre(s)'
                }
            ),
            'apellidos' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresa tus apellidos'
                }
            ),
            'correo' : forms.EmailInput(
                attrs={
                    'placeholder' : 'Ingresa tu correo'
                }
            ),
            'gerenteArea' : forms.CheckboxInput()
        }
    