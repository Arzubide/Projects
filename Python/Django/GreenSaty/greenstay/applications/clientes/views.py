from django.shortcuts import render
from .forms import Tarjeta
#Modelos
from .models import TarjetaCredito
from applications.habitaciones.models import Habitacion
from applications.users.models import Usuarios
from django.views import View
#Vistas
from django.views.generic import CreateView, DetailView, UpdateView, DeleteView, ListView
from django.urls import reverse_lazy
from django.shortcuts import redirect, get_object_or_404

class RegistroTarjeta(CreateView):
    template_name = 'clientes/registroTarjeta.html'
    form_class = Tarjeta
    success_url = reverse_lazy('urls_home:inicioUser')
    
    def form_valid(self, form):
        form.instance.usuario = self.request.user #Le asignamos la tarjeta al cliente que tiene la cuenta activa
        return super().form_valid(form)
    

class DetallesCuenta(DetailView):
    template_name = 'clientes/detallesCuenta.html'
    model = Usuarios

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        Usuario = self.request.user

        #Tarjetas registradas
        TarjetasUsuario = TarjetaCredito.objects.filter(usuario=Usuario)
        context['tarjeta'] = TarjetasUsuario

        #habitaciones registradas
        HabitacionesUsurio = Habitacion.objects.filter(usuarioHabitacion=Usuario) #Variable modelo = varible de la funcion
        context['habitacion'] = HabitacionesUsurio
        return context


class EliminarTarjetaCredito(DeleteView):
    model = TarjetaCredito
    template_name = 'clientes/eliminarTarjeta.html'
    success_url = reverse_lazy('urls_home:inicioUser')


class EliminarReservacion(View):
    def post(self, request, pk):
        habitacion = get_object_or_404(Habitacion, pk=pk, estadoHabitacion='RESERVADA')
        habitacion.estadoHabitacion = 'DISPONIBLE'
        habitacion.usuarioHabitacion = None
        habitacion.save()
        return redirect('urls_home:inicioUser')


class ActualizarDatos(UpdateView):
    model = Usuarios
    template_name = 'clientes/editarDatos.html'
    fields = [
        'nombres',
        'apellidos',
        'correo',
    ]
    success_url = reverse_lazy('urls_home:inicioUser')


class VistaCheckInYCheckOut(ListView):
    '''Mostrara las habitaciones en las que puede realizar checkIn y checkOut'''


class DatosHabitacionReservada(DetailView):
    model = Habitacion
    template_name = 'clientes/DatosHabitacion.html'
    context_object_name = 'habitacion'
    
    
class ValidacionChekIn():
    pass


class CkeckIn(View):
    pass


class ChekOut(View):
    pass