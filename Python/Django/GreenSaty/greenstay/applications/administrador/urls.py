from django.urls import path
from . import views

app_name = 'urls_administrador'

urlpatterns = [
    #Se le agrego el dominio Administrador/ antes de la url mostrada
    path(
        'Registro-Empleados/', 
        views.RegistroDelPerosnal.as_view(),
        name='RegistroEmpleado'
    ),
    path(
        'Lista-Empleados/',
        views.ListadoPersonal.as_view(),
        name = 'ListadoEmpleados',
    ),
    path(
        'Lista-clientes/',
        views.ListaClientes.as_view(),
        name='ListaClientes'
    ),
        path(
        'Eliminar-Cliente/<pk>',
        views.EliminarCliente.as_view(),
        name='EliminarCliente'
    ),
    path(
        'Modificar-Cliente/<pk>',
        views.ModificarUsuario.as_view(),
        name='ModificarUsuario'
    ),
    path(
        'Eliinar-Empleado/<pk>',
        views.EliminarPersonal.as_view(),
        name='EliminarEmpleado',
    ),
    path(
        'Modificar-Empleado/<pk>',
        views.ModificarPersonal.as_view(),
        name='MoficarEmpleado'
    )
]