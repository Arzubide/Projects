from django.urls import path
from . import views

app_name = 'urls_clientes'

urlpatterns = [
    path('registroTarjeta/',
        views.RegistroTarjeta.as_view(),
        name='registroTarjeta'    
    )
]