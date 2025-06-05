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
                attrs = {
                    'class' : 'form-select'
                }
            ),
            'nombres' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresa tu nombre(s)',
                    'class': 'form-control',
                    'id' : 'nombreArea'
                }
            ),
            'apellidos' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresa tus apellidos',
                    'class': 'form-control',
                    'id' : 'nombreArea'
                }
            ),
            'correo' : forms.EmailInput(
                attrs={
                    'placeholder' : 'Ingresa tu correo',
                    'class': 'form-control',
                    'id' : 'nombreArea'
                }
            ),
            'gerenteArea' : forms.CheckboxInput()
        }
    