from django import forms
from .models import RegistroPersonal
from applications.users.models import Usuarios


class ModeloRegistroPersonal(forms.ModelForm):
    
    class Meta:
        model = RegistroPersonal
        fields =(
            'area',
            'nombres',
            'apellidos',
            'correo'
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
                    'id' : ''
                }
            ),
            'apellidos' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresa tus apellidos',
                    'class': 'form-control',
                    'id' : ''
                }
            ),
            'correo' : forms.EmailInput(
                attrs={
                    'placeholder' : 'Ingresa tu correo',
                    'class': 'form-control',
                    'id' : ''
                }
            )
        }


class ModelUsuarios(forms.ModelForm):
    class Meta:
        model = Usuarios
        fields = (
            'nombres',
            'apellidos',
            'correo',
            'is_staff',
            'is_admin_pagina'
        )

        widgets = {
            'nombres' : forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'id' : ''
                }
            ),
            'apellidos' : forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'id' : ''
                }
            ),
            'correo' : forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'id' : ''
                }
            ),
            'is_staff' : forms.CheckboxInput(
                attrs={
                    'class': '',
                    'id' : ''
                }
            ),
            'is_admin_pagina' : forms.CheckboxInput(
                attrs={
                    'class': '',
                    'id' : ''
                }
            )
        }