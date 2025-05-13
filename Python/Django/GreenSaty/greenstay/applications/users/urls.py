from django.urls import path
from . import views

app_name = 'urls_users'

urlpatterns = [
    path(
        'registro/', 
        views.RegistroUsuario.as_view(),
        name='registroUsuario'
    ),
    path(
        'registro/admin/',
        views.RegistroAdmin.as_view(),
        name='registroAdmin',
    ),
    path(
        'login/User/',
        views.LoginUsuario.as_view(),
        name='login',
    ),
    path(
        'logout/',
        views.Logout.as_view(),
        name = 'logout'
    ),
    path(
        'login/administrador/',
        views.LoginAdministradores.as_view(),
        name='login-admin'
    ),
]