from django.views.generic import TemplateView
from .mixins import VistaAdministrador, VistaUsuario


class VistaPrincipal(TemplateView):
    template_name = 'home/index.html'


class InicioUsuario(VistaUsuario,TemplateView):
    template_name = 'home/inicioUsuario.html'


class InicioAdministrador(VistaAdministrador,TemplateView):
    template_name = 'home/inicioAdministrador.html'


class Servicios(TemplateView):
    template_name = 'home/indexCont/Servicios.html'


class AcercaDe(TemplateView):
    template_name = 'home/indexCont/Nosotros.html'


class Cuartos(TemplateView):
    template_name = 'home/indexCont/Cuartos.html'