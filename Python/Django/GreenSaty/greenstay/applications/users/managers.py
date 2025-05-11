from django.db import models
from django.contrib.auth.models import BaseUserManager

class UserManager(BaseException, models.Manager):
    
    def _create_user(self,nombres,apellidos,correo,contrasenia,is_staff,is_superuser,**extra_fields):
        #Definimos los campos necesarios para todo tipo de usuarios
        usuario = self.model(
            nombres = nombres,
            apellidos = apellidos,
            correo = correo,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )

        print('la contrasenia es ' + contrasenia)
        usuario.set_password(contrasenia) #hasheamos la contrasenia
        usuario.save(using = self.db) #guardamos en la base de datos
        
        return usuario

    #Creacion de usuario
    def create_user(self, nombres, apellidos, correo, contrasenia = None, **extra_fields):
        return self._create_user(nombres,apellidos,correo,contrasenia,False,False,**extra_fields)
    
    #Creacion de usuario administrador de la aplicacion

    #opciones de super usuario
    def create_superuser(self,nombres,apellidos, correo ,contrasenia = None, **extra_fields):
        return self._create_user(nombres,apellidos,correo,contrasenia,True,True,**extra_fields)

