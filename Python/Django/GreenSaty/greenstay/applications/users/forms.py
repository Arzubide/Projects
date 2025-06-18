from django import forms
from .models import Usuarios
from django.contrib.auth import authenticate
from django.core.exceptions import ValidationError

class FormularioRegistro(forms.ModelForm):

    contrasenia = forms.CharField(
        label = 'Contrasenia',
        required = True, 
        widget = forms.PasswordInput(
            attrs = {
                'placeholder' : 'Ingresa la contrasenia',
                'class' : 'form-control'
            }
        )
    )

    confirmarContrasenia = forms.CharField(
        label = 'Contrasenia',
        required = True, 
        widget = forms.PasswordInput(
            attrs = {
                'placeholder' : 'Repetir la contrasenia la contrasenia',
                'class' : 'form-control'
            }
        )
    )

    class Meta:
        model = Usuarios
        fields = (
            'correo',
            'nombres',
            'apellidos'
        )
        
        widgets = {
            'correo' : forms.EmailInput(
                attrs={
                    'placeholder' : 'Ingresar el correo',
                    'class' : 'form-control'
                }
            ),
            'nombres' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresar tu(s) nombre(s)',
                    'class' : 'form-control'
                }
            ),
            'apellidos' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresar tus apellidos',
                    'class' : 'form-control'
                }
            )

        }

    
    def clean_confirmarContrasenia(self): #Validacion de registro
        if self.cleaned_data['contrasenia'] != self.cleaned_data['confirmarContrasenia']:
            self.add_error('confirmarContrasenia', 'Las contraseñas no son iguales')


class FormularioRegistroAdmin(forms.ModelForm):
    
    contrasenia = forms.CharField(
        label = 'Contrasenia',
        required = True, 
        widget = forms.PasswordInput(
            attrs = {
                'placeholder' : 'Ingresa la contrasenia',
                'class' : 'form-control'
            }
        )
    )

    confirmarContrasenia = forms.CharField(
        label = 'Contrasenia',
        required = True, 
        widget = forms.PasswordInput(
            attrs = {
                'placeholder' : 'Repetir la contrasenia la contrasenia',
                'class' : 'form-control'
            }
        )
    )

    class Meta:
        model = Usuarios
        fields = (
            'correo',
            'nombres',
            'apellidos'
        )
        
        widgets = {
            'correo' : forms.EmailInput(
                attrs={
                    'placeholder' : 'Ingresar el correo',
                    'class' : 'form-control'
                }
            ),
            'nombres' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresar tu(s) nombre(s)',
                    'class' : 'form-control'
                }
            ),
            'apellidos' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresar tus apellidos',
                    'class' : 'form-control'
                }
            )

        }
    
    def clean(self):
        cleaned_data = super().clean()
        contrasenia = cleaned_data.get("contrasenia")
        confirmar = cleaned_data.get("confirmarContrasenia")

        if contrasenia and confirmar and contrasenia != confirmar:
            self.add_error('confirmarContrasenia', 'Las contraseñas no coinciden')

    def clean_correo(self):
        correo = self.cleaned_data.get('correo')
        if correo and not correo.endswith('@greenstay.com'):
            raise ValidationError('El correo debe ser del dominio @greenstay.com para registrarse como administrador')
        return correo




class LoginUsuarios(forms.Form):
    
    correo = forms.CharField(
        label='Correo',
        required=True,
        widget=forms.EmailInput(
            attrs={
                'placeholder':'Ingrese su correo',
                'class' : 'form-control',
            }
        )
    )

    password = forms.CharField(
        label='Contraseña',
        required=True,
        widget=forms.PasswordInput(
            attrs={
                'placeholder': 'Ingresa tu contraseña',
                'class' : 'form-control',
            }
        )
    )

    def clean(self):
        cleaned_data = super().clean()
        correo = cleaned_data.get('correo')
        password = cleaned_data.get('password')

        if correo and password:
            usuario = authenticate(correo=correo, password=password)
            if not usuario:
                raise forms.ValidationError('Los datos de usuario no son correctos')

        return cleaned_data


class LoginAdmin(forms.Form):
    
    correo = forms.CharField(
        required=True,
        widget=forms.EmailInput(
            attrs={
                'placeholder':'Ingrese su correo',
                'class' : 'form-control',
            }
        )
    )

    password = forms.CharField(
        required=True,
        widget=forms.PasswordInput(
            attrs={
                'placeholder': 'Ingresa tu contraseña',
                'class' : 'form-control',
            }
        )
    )

    def clean(self):
        cleaned_data = super().clean()
        correo = cleaned_data.get('correo')
        password = cleaned_data.get('password')

        dominio = '@greenstay.com'

        if dominio not in correo:
            raise forms.ValidationError('No es dominio de correo de administrador')
        else:
            if correo and password:
                usuario = authenticate(correo=correo, password=password)
                if not usuario:
                    raise forms.ValidationError('Los datos de usuario no son correctos')

            return cleaned_data


class ActualizarDatos(forms.ModelForm):
    class Meta:
        model = Usuarios
        fields = (
            'correo',
            'nombres',
            'apellidos'
        )
        
        widgets = {
            'correo' : forms.EmailInput(
                attrs={
                    'placeholder' : 'Ingresar el correo',
                    'class' : 'form-control'
                }
            ),
            'nombres' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresar tu(s) nombre(s)',
                    'class' : 'form-control'
                }
            ),
            'apellidos' : forms.TextInput(
                attrs={
                    'placeholder' : 'Ingresar tus apellidos',
                    'class' : 'form-control'
                }
            )

        }