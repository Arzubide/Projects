from django.shortcuts import render
#Modelos
from .forms import Tarjeta
from .models import TarjetaCredito
from applications.habitaciones.models import Habitacion
from applications.users.models import Usuarios
#Vistas
from django.views.generic import CreateView, DetailView
from django.urls import reverse_lazy

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
