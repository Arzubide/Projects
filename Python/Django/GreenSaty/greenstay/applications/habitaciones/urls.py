from django.urls import path
from . import views

app_name = 'urls_habitaciones'

urlpatterns = [
    path(
        'habitaciones/',
        views.Habitaciones.as_view(),
        name='ListaHabitaciones'
    )
]