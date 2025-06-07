from django.urls import path
from . import views

app_name = 'urls_home'

urlpatterns = [
    path(
        '',#index general para todos
        views.VistaPrincipal.as_view(),
        name = 'indexHome'
    ),
    path(
        'Inicio/',
        views.InicioUsuario.as_view(),
        name= 'inicioUser'
    ),
    path(
        'Administrador/',
        views.InicioAdministrador.as_view(),
        name='inicioAdmin'
    ),
    path(
        'Servicios/',
        views.Servicios.as_view(),
        name='servicios'
    ),
    path(
        'Nosotros/',
        views.AcercaDe.as_view(),
        name='acercaDe'
    ),
    path(
        'Cuartos/',
        views.Cuartos.as_view(),
        name='cuartos'
    )

]