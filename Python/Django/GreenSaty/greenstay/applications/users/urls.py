from django.urls import path
from . import views

urlpatterns = [
    path('registro/', views.RegistroUsuario.as_view()),
]