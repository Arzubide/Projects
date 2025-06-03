from django.shortcuts import render
from .forms import Tarjeta
from django.views.generic import CreateView
from django.urls import reverse_lazy

class RegistroTarjeta(CreateView):
    template_name = 'clientes/registroTarjeta.html'
    form_class = Tarjeta
    success_url = reverse_lazy()
    
    def form_valid(self, form):
        form.instance.usuario = self.request.user #Le asignamos la tarjeta al cliente que tiene la cuenta activa
        return super().form_valid(form)