from django.shortcuts import render
from django.views.generic import FormView, ListView, DeleteView,UpdateView
from .forms import Registro
from django.urls import reverse_lazy
from .models import AreasHotel
#Control de sesiones
from applications.home.mixins import VistaAdministrador


class RegistroArea(VistaAdministrador,FormView):
    template_name = 'areas/Creacion_servicios.html'
    form_class = Registro
    success_url = reverse_lazy('urls_home:inicioAdmin')
    
    def form_valid(self, form):
        areaCreada = AreasHotel(
            nombreArea = form.cleaned_data['nombreArea'],
            horarioFuncionamiento = form.cleaned_data['horarioFuncionamiento'],
            estado = form.cleaned_data['estado']
        )
        areaCreada.save()
        return super(RegistroArea, self).form_valid(form)


class ListaAreasRegistradas(VistaAdministrador,ListView):
    model = AreasHotel
    template_name = 'areas/ListaAreasRegistradas.html'
    context_object_name = 'areas'

    def get_queryset(self):
        return AreasHotel.objects.all()


class EliminarArea(VistaAdministrador,DeleteView):
    model = AreasHotel
    template_name = 'acciones/EliminarArea.html'
    success_url = reverse_lazy('urls_areas:ListaAreasRegistradas')


class ModificarArea(VistaAdministrador,UpdateView):
    model = AreasHotel
    template_name = 'acciones/ModificarArea.html'
    form_class = Registro
    success_url = reverse_lazy('urls_areas:ListaAreasRegistradas')