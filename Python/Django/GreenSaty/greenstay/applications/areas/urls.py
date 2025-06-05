from django.urls import path
from . import views

app_name = 'urls_areas'

urlpatterns = [
    #Se le agrego el dominio Administrador/ antes de la url mostrada
    path(
        'Registro-Area/',
        views.RegistroArea.as_view(),
        name='RegistroArea'
    ),
    path(
        'Lista-Areas/',
        views.ListaAreasRegistradas.as_view(),
        name='ListaAreasRegistradas'
    )
]