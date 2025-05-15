from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy

class VistaAdministrador(LoginRequiredMixin, UserPassesTestMixin):
    def test_func(self):#Verificamos que se administrador de usuario
        return self.request.user.is_admin_pagina
    
    def handle_no_permission(self):
        return HttpResponseRedirect(reverse_lazy('urls_users:login-admin')) #Redireccionamanieto de pagina en caso de no estar logeado como administrador

    
class VistaUsuario(LoginRequiredMixin, UserPassesTestMixin):
    def test_func(self):#Verificamos que en efecto, sea usuario (verificamos que no tenga los permisos de un administrador de la pagina)
        return not self.request.user.is_admin_pagina
    
    def handle_no_permission(self):
        return HttpResponseRedirect(reverse_lazy('urls_users:login')) #Redireccionamanieto de pagina en caso de no estar logeado como usuario