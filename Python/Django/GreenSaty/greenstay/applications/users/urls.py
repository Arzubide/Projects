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
    )
]