from django import forms
from .models import AreasHotel


class Registro(forms.ModelForm):
    # nombreArea = forms.CharField(max_length=50)
    # horarioFuncionamiento = forms.CharField(max_length=15)

    class Meta:
        model = AreasHotel
        fields = (
            'nombreArea',
            'horarioFuncionamiento',
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
            )
        }
