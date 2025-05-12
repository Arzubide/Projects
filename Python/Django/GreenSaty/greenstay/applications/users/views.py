from django.views.generic.edit import FormView
from .forms import FormularioRegistro, FormularioRegistroAdmin
from .models import Usuarios

class RegistroUsuario(FormView):
    template_name = 'users/registroUsuario.html'
    form_class = FormularioRegistro
    success_url = 'users/inicioUsuario.html'

    def form_valid(self, form):

        Usuarios.objects.create_user(
            form.cleaned_data['correo'], 
            form.cleaned_data['nombres'],
            form.cleaned_data['apellidos'],
            form.cleaned_data['contrasenia'],
        )

        return super(RegistroUsuario,self).form_valid(form)
    
#Creamos la vista exclusiva para la creacion de un administrador
class RegistroAdmin(FormView):
    template_name = 'users/registroAdmin.html'
    form_class = FormularioRegistroAdmin
    success_url = 'users/inicioAdministrador.html'

    def form_valid(self, form):
        Usuarios.objects.create_admin_pagina(
            form.cleaned_data['correo'], 
            form.cleaned_data['nombres'],
            form.cleaned_data['apellidos'],
            form.cleaned_data['contrasenia'],
        )

        return super(RegistroAdmin, self).form_valid(form)