from django.shortcuts import render
from .models import RegistroPersonal
from django.views.generic import CreateView, ListView
from .forms import ModeloRegistroPersonal
from django.urls import reverse_lazy

class RegistroDelPerosnal(CreateView):
    model = RegistroPersonal
    template_name = 'administrador/RegistroPersonal.html'
    form_class = ModeloRegistroPersonal
    success_url = reverse_lazy('urls_home:inicioAdmin')

class ListadoPersonal(ListView):
    # template_name = 'administrador/ListaEmpleados.html'
    template_name = 'administrador/Gestion_empleados.html'
    context_object_name = 'empleados'
    
    def get_queryset(self):
        empleado = self.request.GET.get("apellido","")
        ListadoEmpleados = RegistroPersonal.objects.filter(
            apellidos__icontains = empleado
        )

        return ListadoEmpleados
