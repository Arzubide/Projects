from django.shortcuts import render
#Vistas
from django.views.generic import ListView, UpdateView, DetailView
from django.views import View
#Modelos
from .models import Habitacion
from applications.clientes.models import TarjetaCredito
from .forms import ModeloHabitacion
#URLs
from django.urls import reverse_lazy
from django.shortcuts import redirect, get_object_or_404 #no se que hace 404

class Habitaciones(ListView): #Administrador
    template_name = 'habitaciones/Catalogo_cuartos.html'
    model = Habitacion
    context_object_name = 'habitaciones'
    paginate_by = 10
    
    def get_queryset(self):
        categoria = self.request.GET.get('categoria','')
        ListaPorCategoria = Habitacion.objects.filter(
            nivelHabitacion__icontains = categoria
        )
        return ListaPorCategoria



class HabitacionesDisponibles(ListView):  # Cliente
    template_name = 'habitaciones/HabitacionesDisponibles.html'
    context_object_name = 'habitaciones'
    paginate_by = 5

    def get_queryset(self):
        diponibilidad = 'DISPONIBLE'  
        return Habitacion.objects.filter(estadoHabitacion=diponibilidad)
    

class ActualizarDatosHabitacion(UpdateView):
    model = Habitacion
    template_name = 'acciones/ModificarDatosHabitcaion.html'
    form_class = ModeloHabitacion
    success_url = reverse_lazy('urls_habitaciones:ListaHabitaciones')


class ReservarHabitacionView(View):
    def post(self, request, pk):
        habitacion = get_object_or_404(Habitacion, pk=pk, estadoHabitacion='DISPONIBLE')
        habitacion.estadoHabitacion = 'RESERVADA'
        habitacion.usuarioHabitacion = request.user
        habitacion.save()
        return redirect('urls_habitaciones:HabitacionesDisponibles')  # vista con los datos de la reservacion


class DetallesHabitacion(DetailView):
    model = Habitacion
    template_name = 'habitaciones/detallesHabitacion.html'
    context_object_name = 'habitacion'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        usuario = self.request.user

        TarjetasUsuario = TarjetaCredito.objects.filter(usuario=usuario)
        context['tarjeta'] = TarjetasUsuario

        '''Esto es una consulta que busca todas las tarjetas de crédito en la base de datos que están relacionadas con el usuario actual.'''
        tiene_tarjeta = TarjetaCredito.objects.filter(usuario=usuario).exists()
        '''Dame todas las tarjetas de crédito donde el campo usuario en la base de datos coincida con el usuario que está actualmente autenticado.'''
        context['tiene_tarjeta'] = tiene_tarjeta
        return context
    