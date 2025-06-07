from django import forms
from .models import AreasHotel


class Registro(forms.ModelForm):
    class Meta:
        model = AreasHotel
        fields = (
            'nombreArea',
            'horarioFuncionamiento',
            'estado'
        )

        
        widgets = {
            'nombreArea' : forms.TextInput(
                attrs = {
                    'placeholder' : 'Ingrese el nombre del area',
                    'class': 'form-control',
                    'id' : 'nombreArea'
                }
            ),
            'horarioFuncionamiento' : forms.TextInput(
                attrs = {
                    'placeholder' : 'nnAM - nnPM',
                    'class': 'form-control',
                    'id' : 'horarioFuncionamiento'
                }
            ),
            'estado' : forms.Select(
                attrs = {
                    'class' : 'form-select'
                }
            )
        }
