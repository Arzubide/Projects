from django.db import models
from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager, models.Manager):

    def _create_user(self, correo,nombres,apellidos ,contrasenia, is_staff, is_superuser, is_admin_pagina=False,**extra_fields): 
        user = self.model(
            correo = correo,
            nombres = nombres,
            apellidos = apellidos,
            is_staff = is_staff, 
            is_superuser = is_superuser,
            is_admin_pagina=is_admin_pagina,
            **extra_fields 
        )

        user.set_password(contrasenia) 
        user.save(using=self.db)
        return user

    def create_user(self,  correo, nombres, apellidos, password = None, **extra_fields):
        return self._create_user(correo, nombres, apellidos,password, False, False,False, **extra_fields)

    def create_superuser(self, correo,nombres, apellidos, password = None, **extra_fields):
        return self._create_user(correo, nombres, apellidos,password, True, True, False,**extra_fields)
    
    def create_admin_pagina(self, correo, nombres, apellidos, password=None, **extra_fields):
        if not correo.endswith('@greenstay.com'):
            raise ValueError('El correo debe tener el dominio @greenstay.com')
        return self._create_user(correo, nombres, apellidos, password, True, True, True, **extra_fields)