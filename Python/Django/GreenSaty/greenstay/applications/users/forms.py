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