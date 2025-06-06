from django.shortcuts import render
from django.views.generic import FormView, ListView, DeleteView,UpdateView
from .forms import Registro
from django.urls import reverse_lazy
from .models import AreasHotel

class RegistroArea(FormView):
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


class ListaAreasRegistradas(ListView):
    model = AreasHotel
    template_name = 'areas/ListaAreasRegistradas.html'
    context_object_name = 'areas'

    def get_queryset(self):
        return AreasHotel.objects.all()


class EliminarArea(DeleteView):
    model = AreasHotel
    template_name = 'acciones/EliminarArea.html'
    success_url = reverse_lazy('urls_areas:ListaAreasRegistradas')


class ModificarArea(UpdateView):
    model = AreasHotel
    template_name = 'acciones/ModificarArea.html'
    form_class = Registro
    success_url = reverse_lazy('urls_areas:ListaAreasRegistradas')