from django.shortcuts import render
from django.views.generic import ListView, UpdateView
from .models import Habitacion
from django.urls import reverse_lazy

class Habitaciones(ListView): #Administrador
    template_name = 'habitaciones/Catalogo_cuartos.html'
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
    

class ActualizarDatosHabitacion(UpdateView):
    template_name = 'habitaciones/ActualizarDatosHabitcaion.html'
    model = Habitacion
    fields = ('__all__')
    success_url = reverse_lazy('urls_habitaciones:ListaHabitaciones')

