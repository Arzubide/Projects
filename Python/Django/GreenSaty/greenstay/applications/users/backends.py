from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model

class CorreoBackend(BaseBackend):
    def authenticate(self, request, correo=None, password=None, **kwargs):
        print(f"Intentando autenticar con correo: {correo}, password: {password}")
        User = get_user_model()
        try:
            usuario = User.objects.get(correo=correo)
            if usuario.check_password(password):
                print("Contraseña correcta")
                return usuario
            else:
                print("Contraseña incorrecta")
        except User.DoesNotExist:
            print("Usuario no encontrado")
            return None

        return None

    def get_user(self, user_id):
        User = get_user_model()
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None

