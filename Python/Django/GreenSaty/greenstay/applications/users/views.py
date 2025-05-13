from django.views.generic import View
from django.views.generic.edit import FormView
from .forms import FormularioRegistro, FormularioRegistroAdmin, LoginUsuarios, LoginAdmin
from .models import Usuarios
from django.urls import reverse_lazy, reverse
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect

class RegistroUsuario(FormView):
    template_name = 'users/registroUsuario.html'
    form_class = FormularioRegistro
    success_url = reverse_lazy('urls_users:login')

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
    success_url = reverse_lazy('urls_users:login-admin') #Debe mandar al login

    def form_valid(self, form):
        Usuarios.objects.create_admin_pagina(
            form.cleaned_data['correo'], 
            form.cleaned_data['nombres'],
            form.cleaned_data['apellidos'],
            form.cleaned_data['contrasenia'],
        )

        return super(RegistroAdmin, self).form_valid(form)


class LoginUsuario(FormView):
    template_name = 'users/loginUser.html'
    form_class = LoginUsuarios
    success_url = reverse_lazy('urls_home:inicioUser')

    def form_valid(self, form):
        correo = form.cleaned_data.get('correo')
        password = form.cleaned_data.get('password')

        usuario = authenticate(correo=correo, password=password)# Django espera un campo password para el backend de autenticación.
        if usuario:
            login(self.request, usuario)
        else:
            form.add_error(None, "Los datos de usuario no son correctos")
            return self.form_invalid(form)

        return super().form_valid(form)


class LoginAdministradores(FormView):
    template_name = 'users/loginAdministradores.html'
    form_class = LoginAdmin
    success_url = reverse_lazy('urls_home:inicioAdmin')
    
    def form_valid(self, form):
        correo = form.cleaned_data.get('correo')
        password = form.cleaned_data.get('password')
        usuario = authenticate(correo=correo, password=password)
        if usuario:
            login(self.request, usuario)
        else:
            form.add_error(None, "Los datos de usuario no son correctos")
            return self.form_invalid(form)
        return super(LoginAdministradores,self).form_valid(form)


class Logout(View):
    def get(self, request,*args, **kargs):
        logout(request)

        return HttpResponseRedirect(
            reverse(
                #Dentro de aqui indicamos a traves de nombres la rediccion a donde queramos que vaya
                'urls_home:indexHome'
            )
        )