from django.db import models
from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager, models.Manager):

    def _create_user(self, correo,nombres,apellidos ,contrasenia, is_staff, is_superuser, **extra_fields): #Funcion para reutilizarla
        user = self.model( #Definimos que parametros son necesarios para la creacion de un usuario
            
            correo = correo,
            nombres = nombres,
            apellidos = apellidos,
            is_staff = is_staff, #Indica si el usuario puede o no acceder al administrador de django
            is_superuser = is_superuser, #inidicamos si el usuario que se crea es super usuario con todos los permisos
            **extra_fields #Indicamos los demas parametros que son extra (no necesarios) para la creacion de un perfil de un usuario
        )

        print(f"Contraseña ingresada: {contrasenia}")
        user.set_password(contrasenia) #hasheamos (encriptamos la contraseña ingresada)
        user.save(using=self.db) #Guardamos la contraseña en la base de datos
        return user

    def create_user(self,  correo, nombres, apellidos, password = None, **extra_fields):
        return self._create_user(correo, nombres, apellidos,password, False, False, **extra_fields)

    def create_superuser(self, correo,nombres, apellidos, password = None, **extra_fields):
        return self._create_user(correo, nombres, apellidos,password, True, True,**extra_fields) #Ambos valores booleanos (true) es para indicar los permisos de is_staff y de is_superuser