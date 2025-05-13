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
        'Administrador',
        views.InicioAdministrador.as_view(),
        name='inicioAdmin'
    ),
]