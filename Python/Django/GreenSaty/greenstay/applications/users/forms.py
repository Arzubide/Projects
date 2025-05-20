from django import forms
from .models import Usuarios
from django.contrib.auth import authenticate

class FormularioRegistro(forms.ModelForm):

    contrasenia = forms.CharField(
        label = 'Contrasenia',
        required = True, 
        widget = forms.PasswordInput(
            attrs = {
                'placeholder' : 'Ingresa la contrasenia'
            }
        )
    )

    confirmarContrasenia = forms.CharField(
        label = 'Contrasenia',
        required = True, 
        widget = forms.PasswordInput(
            attrs = {
                'placeholder' : 'Repetir la contrasenia la contrasenia'
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
    
    def clean_confirmarContrasenia(self): #Validacion de registro
        if self.cleaned_data['contrasenia'] != self.cleaned_data['confirmarContrasenia']:
            self.add_error('confirmarContrasenia', 'Las contraseñas no son iguales')


class FormularioRegistroAdmin(forms.ModelForm):
    
    contrasenia = forms.CharField(
        label = 'Contrasenia',
        required = True, 
        widget = forms.PasswordInput(
            attrs = {
                'placeholder' : 'Ingresa la contrasenia'
            }
        )
    )

    confirmarContrasenia = forms.CharField(
        label = 'Contrasenia',
        required = True, 
        widget = forms.PasswordInput(
            attrs = {
                'placeholder' : 'Repetir la contrasenia la contrasenia'
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
    
    def clean_correo(self):
        dominioCorreo = '@greenstay.com'
        correo = self.cleaned_data['correo']
        if dominioCorreo in correo:
            return correo
        else:
            raise self.add_error('correo','el correo debe ser de dominio @greenstay.com para registrarse como andministrador')


class LoginUsuarios(forms.Form):
    
    correo = forms.CharField(
        label='Correo',
        required=True,
        widget=forms.EmailInput(
            attrs={
                'placeholder':'Ingrese su correo'
            }
        )
    )

    password = forms.CharField(
        label='Contraseña',
        required=True,
        widget=forms.PasswordInput(attrs={'placeholder': 'Ingresa tu contraseña'})
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


