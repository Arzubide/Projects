from django.shortcuts import render
from django.views.generic import TemplateView

class VistaPrincipal(TemplateView):
    template_name = 'home/index.html'

class InicioUsuario(TemplateView):
    template_name = 'home/inicioUsuario.html'
