from django.views.generic.edit import FormView
from .forms import FormularioRegistro, FormularioRegistroAdmin, LoginUsuarios
from .models import Usuarios
from django.urls import reverse_lazy
from django.contrib.auth import authenticate, login, logout

class RegistroUsuario(FormView):
    template_name = 'users/registroUsuario.html'
    form_class = FormularioRegistro
    success_url = 'Inicio/' #Debe mandar al login

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
    success_url = 'Administrador/' #Debe mandar al login

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

        print(f"Vista - Correo: {correo}, Password: {password}")

        usuario = authenticate(correo=correo, password=password)
        if usuario:
            print("Autenticación exitosa")
            login(self.request, usuario)
        else:
            print("Autenticación fallida")
            form.add_error(None, "Los datos de usuario no son correctos")
            return self.form_invalid(form)

        return super().form_valid(form)