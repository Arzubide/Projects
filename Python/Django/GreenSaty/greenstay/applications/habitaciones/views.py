from django.shortcuts import render
from django.views.generic import ListView
from .models import Habitacion

class Habitaciones(ListView):
    template_name = 'habitaciones/ListaHabitaciones.html'
    model = Habitacion
    context_object_name = 'habitaciones'
    pass