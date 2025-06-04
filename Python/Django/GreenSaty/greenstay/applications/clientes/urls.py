from django.urls import path
from . import views

app_name = 'urls_clientes'

urlpatterns = [
    path('registroTarjeta/',
        views.RegistroTarjeta.as_view(),
        name='registroTarjeta'    
    ),
    path(
        'Detalles-Cuenta/<pk>/',
        views.DetallesCuenta.as_view(),
        name='detallesCuenta'
    ),
    path(
        'Actualizar-Datos/<pk>/',
        views.ActualizarDatos.as_view(),
        name='actualizarDatos'
    ),
    path('Eliminar/<int:pk>/', 
        views.EliminarReservacion.as_view(), 
        name='EliminarReservacion',
    ),
    path(
        'Eliminar-Tarjeta/<pk>/',
        views.EliminarTarjetaCredito.as_view(),
        name='EliminarTarjeta'
    )
]