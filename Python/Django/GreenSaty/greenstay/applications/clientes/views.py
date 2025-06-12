from django.utils import timezone
from django.shortcuts import render
from .forms import Tarjeta
#Modelos
from .models import TarjetaCredito
from applications.habitaciones.models import Habitacion
from applications.users.models import Usuarios
from applications.users.forms import ActualizarDatos
from django.views import View
#Vistas
from django.views.generic import CreateView, DetailView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.urls import reverse
from django.shortcuts import redirect, get_object_or_404

#Control de sesiones
from applications.home.mixins import VistaUsuario


class RegistroTarjeta(VistaUsuario,CreateView):
    template_name = 'clientes/registroTarjeta.html'
    form_class = Tarjeta
    
    def form_valid(self, form):
        form.instance.usuario = self.request.user #Le asignamos la tarjeta al cliente que tiene la cuenta activa
        return super().form_valid(form)
    
    def get_success_url(self):
        # Redirige a la vista con el detalle de cuenta del usuario actual
        return reverse('urls_clientes:detallesCuenta', kwargs={'pk': self.request.user.id})
    

class DetallesCuenta(VistaUsuario,DetailView):
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
        context['habitaciones'] = HabitacionesUsurio
        return context


class EliminarTarjetaCredito(VistaUsuario,DeleteView):
    model = TarjetaCredito
    template_name = 'clientes/eliminarTarjeta.html'
    
    def get_success_url(self):
        # Redirige a la vista con el detalle de cuenta del usuario actual
        return reverse('urls_clientes:detallesCuenta', kwargs={'pk': self.request.user.id})



class EliminarReservacion(VistaUsuario,View):
    ##Duda sobre la funcion get
    template_name = 'acciones/SalidaElimar.html'

    def get(self, request, pk):
        habitacion = get_object_or_404(Habitacion, pk=pk, usuarioHabitacion=request.user)
        return render(request, self.template_name, {'habitacion': habitacion})

    def post(self, request, pk):
        habitacion = get_object_or_404(Habitacion, pk=pk, usuarioHabitacion=request.user)

        token_ingresado = request.POST.get('token', '')
        if token_ingresado == str(habitacion.tockenChekInCheckOut):
            habitacion = get_object_or_404(Habitacion, pk=pk)
            habitacion.estadoHabitacion = 'DISPONIBLE'
            habitacion.tockenChekInCheckOut = None
            habitacion.usuarioHabitacion = None
            habitacion.fechaCheckOut = timezone.now()
            habitacion.fechaCheckIn = None
            habitacion.save()
            return redirect('urls_home:inicioUser')
        else:
            return render(request, self.template_name, {
                'habitacion': habitacion,
                'error': 'El código ingresado no es válido.'
            })


class ActualizarDatos(VistaUsuario,UpdateView):
    model = Usuarios
    template_name = 'clientes/editarDatos.html'
    form_class = ActualizarDatos
    success_url = reverse_lazy('urls_home:inicioUser')


class DatosHabitacionReservada(VistaUsuario,DetailView):
    model = Habitacion
    template_name = 'clientes/DatosHabitacion.html'
    context_object_name = 'habitacion'
    
    
class ValidacionChekIn(VistaUsuario,View):
    template_name = 'acciones/ValidacionChekIn.html'

    def get(self, request, pk):
        habitacion = get_object_or_404(Habitacion, pk=pk, usuarioHabitacion=request.user)
        return render(request, self.template_name, {'habitacion': habitacion})

    def post(self, request, pk):
        habitacion = get_object_or_404(Habitacion, pk=pk, usuarioHabitacion=request.user)
        token_ingresado = request.POST.get('token', '')
        user = request.user

        if token_ingresado == str(habitacion.tockenChekInCheckOut):
            habitacion.estadoHabitacion = 'OCUPADA'
            habitacion.fechaCheckIn = timezone.now()
            habitacion.save()
            return redirect('urls_clientes:detallesCuenta', pk=user.id) # concatenamos para que lo tome como PK de la url
        else:
            return render(request, self.template_name, {
                'habitacion': habitacion,
                'error': 'El código ingresado no es válido.'
            })
    
