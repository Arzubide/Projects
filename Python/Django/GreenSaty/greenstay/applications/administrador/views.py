from django.shortcuts import render
#Modelos
from .models import RegistroPersonal
from applications.users.models import Usuarios
#Vistas
from django.views.generic import CreateView, ListView, DeleteView
from .forms import ModeloRegistroPersonal
from django.urls import reverse_lazy

class RegistroDelPerosnal(CreateView):
    model = RegistroPersonal
    template_name = 'administrador/Contratacion.html'
    form_class = ModeloRegistroPersonal
    success_url = reverse_lazy('urls_home:inicioAdmin')


class ListadoPersonal(ListView):

    template_name = 'administrador/Gestion_empleados.html'
    context_object_name = 'empleados'
    
    def get_queryset(self):
        empleado = self.request.GET.get("apellido","")
        ListadoEmpleados = RegistroPersonal.objects.filter(
            apellidos__icontains = empleado
        )

        return ListadoEmpleados
    

class ListaClientes(ListView):
    model = Usuarios
    template_name = 'administrador/ListaUsuarios.html'
    context_object_name = 'usuarios'

    def get_queryset(self):
        return Usuarios.objects.all() #Filtramos a todos los usuarios del modelo
    

class EliminarCliente(DeleteView):
    model = Usuarios
    template_name = 'acciones/eliminarUsuario.html'
    success_url = reverse_lazy('urls_home:inicioAdmin')
