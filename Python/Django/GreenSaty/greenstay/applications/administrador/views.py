from django.shortcuts import render
from .models import RegistroPersonal
from django.views.generic import CreateView
from .forms import ModeloRegistroPersonal
from django.urls import reverse_lazy

class RegistroDelPerosnal(CreateView):
    model = RegistroPersonal
    template_name = 'administrador/RegistroPersonal.html'
    form_class = ModeloRegistroPersonal
    success_url = reverse_lazy('urls_home:inicioAdmin')
