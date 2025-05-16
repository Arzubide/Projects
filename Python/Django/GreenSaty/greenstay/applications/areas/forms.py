from django import forms


class Registro(forms.Form):
    nombreArea = forms.CharField(max_length=50)
    horarioFuncionamiento = forms.CharField(max_length=15)
