from django.views.generic.edit import FormView
from .forms import FormularioRegistro
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