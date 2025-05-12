from django import forms
from .models import Usuarios

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
        