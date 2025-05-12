from django.db import models
from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager, models.Manager):
    
    #Funcion base para la creacion de usuarios
    def _create_user(self, nombres, apellidos, correo, contrasenia, is_staff, is_superuser, **extra_fields):
        
        usuario = self.model(
            nombres = nombres,
            apellidos = apellidos,
            correo = correo,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )

        print(f"Contraseña ingresada: {contrasenia}")
        usuario.set_password(contrasenia) #hasheamos
        usuario.save(using=self.db) #Guardamos la contraseña en la base de datos
        
        return usuario
    
    #Funcion para la creacion de los usuarios
    def create_user(self, nombres, apellidos, correo, contrasenia = None, **extra_fields):
        return self._create_user(nombres, apellidos, correo, contrasenia, False, False, **extra_fields)

    
    #Funcion para la creacion de los administradores de la pagina



    #Funcion para la creacion de los super usuarios
    def create_superuser(self, nombres, apellidos, correo, contrasenia = None, **extra_fields):
        return self._create_user(nombres, apellidos, correo, contrasenia, True, True, **extra_fields)