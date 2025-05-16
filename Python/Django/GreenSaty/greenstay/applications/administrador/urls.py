from django.urls import path
from . import views

urlpatterns = [
    #Se le agrego el dominio Administrador/ antes de la url mostrada
    path('Registro-Empleados/', views.RegistroDelPerosnal.as_view()),
]