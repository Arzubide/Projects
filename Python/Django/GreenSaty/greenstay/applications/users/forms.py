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

    contrasenia = forms.CharField(
        label = 'Contrasenia',
        required = True,
        widget = forms.PasswordInput(
            attrs = {
                'placeholder':'Ingresa tu contrasenia'
            }
        ) 
    )

    def clean(self): #creamos validacion a mas de un campo
        '''Creamos la validacion para ver si los datos que ingreso son correctos para un inicio de sesion'''
        cleaned_data = super(LoginUsuarios, self).clean() #obtienes el diccionario cleaned_data que contiene los datos ya validados de todos los campos del formulario.
        correo = self.cleaned_data['correo'] #extraemos los datos que le usuario ingreso al formulario
        contrasenia = self.cleaned_data['contrasenia']

        if not authenticate(correo = correo, contrasenia = contrasenia): #verificar si el nombre de usuario y la contraseña son válidos y corresponden a un usuario activo.
            raise forms.ValidationError('Los datos de usuario no son correctos')
        
        return  self.cleaned_data

