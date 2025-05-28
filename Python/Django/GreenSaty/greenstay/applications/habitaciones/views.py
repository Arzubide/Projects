from django.shortcuts import render
from django.views.generic import ListView
from .models import Habitacion

class Habitaciones(ListView): #Administrador
    template_name = 'habitaciones/ListaHabitaciones.html'
    model = Habitacion
    context_object_name = 'habitaciones'
    paginate_by = 10
    pass


class HabitacionesDisponibles(ListView):  # Cliente
    template_name = 'habitaciones/HabitacionesDisponibles.html'
    context_object_name = 'habitaciones'
    paginate_by = 5

    def get_queryset(self):
        diponibilidad = 'DISPONIBLE'  
        return Habitacion.objects.filter(estadoHabitacion=diponibilidad)
