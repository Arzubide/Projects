from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import UserManager

class Usuarios(AbstractBaseUser,PermissionsMixin):
    
    nombres = models.CharField(max_length=25) 
    apellidos = models.CharField(max_length=25)
    correo = models.EmailField(unique=True)

    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'correo'
    REQUIRED_FIELDS = ['nombres,apellidos']

    objects = UserManager()