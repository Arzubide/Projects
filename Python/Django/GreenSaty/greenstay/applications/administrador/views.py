from django.shortcuts import render
#Modelos
from .models import RegistroPersonal
from applications.users.models import Usuarios
#Vistas
from django.views.generic import CreateView, ListView, DeleteView,UpdateView
from .forms import ModeloRegistroPersonal, ModelUsuarios
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


class EliminarPersonal(DeleteView):
    model = RegistroPersonal
    template_name = 'acciones/EliminarPersonal.html'
    success_url = reverse_lazy('urls_administrador:ListadoEmpleados')


class ModificarPersonal(UpdateView):
    model = RegistroPersonal
    template_name = 'acciones/ModificarEmpleado.html'
    form_class = ModeloRegistroPersonal
    success_url = reverse_lazy('urls_administrador:ListadoEmpleados')


class ListaClientes(ListView):
    model = Usuarios
    template_name = 'administrador/ListaUsuarios.html'
    context_object_name = 'usuarios'

    def get_queryset(self):
        return Usuarios.objects.exclude(correo__endswith='@greenstay.com') #Lista unicamente de los empleados
    

class EliminarCliente(DeleteView):
    model = Usuarios
    template_name = 'acciones/eliminarUsuario.html'
    success_url = reverse_lazy('urls_administrador:ListaClientes')


class ModificarUsuario(UpdateView):
    model = Usuarios
    template_name = 'acciones/modificarUsuario.html'
    form_class = ModelUsuarios
    success_url = reverse_lazy('urls_administrador:ListaClientes') 