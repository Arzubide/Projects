from django.shortcuts import render
from django.views.generic import ListView, UpdateView
from django.views import View
from .models import Habitacion
from django.urls import reverse_lazy
from django.shortcuts import redirect, get_object_or_404 #no se que hace 404

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
    

class ActualizarDatosHabitacion(UpdateView):
    template_name = 'habitaciones/ActualizarDatosHabitcaion.html'
    model = Habitacion
    fields = ('__all__')
    success_url = reverse_lazy('urls_habitaciones:ListaHabitaciones')


class ReservarHabitacionView(View):
    def post(self, request, pk):
        habitacion = get_object_or_404(Habitacion, pk=pk, estadoHabitacion='DISPONIBLE')
        habitacion.estadoHabitacion = 'RESERVADA'
        habitacion.usuarioHabitacion = request.user
        habitacion.save()
        return redirect('urls_habitaciones:HabitacionesDisponibles')  # vista con los datos de la reservacion
