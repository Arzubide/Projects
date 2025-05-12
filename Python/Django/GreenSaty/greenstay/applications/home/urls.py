from django.urls import path
from . import views

app_name = 'urls_home'

urlpatterns = [
    path(
        'Inicio/',
        views.InicioUsuario.as_view(),
        name= 'inicioUser'
    ),
]