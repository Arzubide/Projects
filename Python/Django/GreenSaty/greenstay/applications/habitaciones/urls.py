from django.urls import path
from . import views

app_name = 'urls_habitaciones'

urlpatterns = [
    path(
        'habitaciones/',
        views.Habitaciones.as_view(),
        name='ListaHabitaciones',
    ),
    path('Habitaciones-disponibles/',
        views.HabitacionesDisponibles.as_view(),
        name='HabitacionesDisponibles'
    ),
    path(
        'Actualizar-Habitacion/<pk>',
        views.ActualizarDatosHabitacion.as_view(),
        name='ActualizarHabitacion',
    ),
    path('reservar/<int:pk>/', 
        views.ReservarHabitacionView.as_view(), 
        name='reservar_habitacion',
    ),
]