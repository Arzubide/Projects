from django.urls import path
from . import views

urlpatterns = [
    #Se le agrego el dominio Administrador/ antes de la url mostrada
    path('Registro-Area/', views.RegistroArea.as_view()),
]