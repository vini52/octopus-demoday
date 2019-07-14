from django import forms
from app.models import Cadastro

class CadastroForm(forms.ModelForm):
    class Meta:
        model = Cadastro
        fields = [
            'nome',
            'usuario',
            'senha',
            'email',
            'nascimento',
            'telefone'
        ]

class LoginForm(forms.Form):
    usuario = forms.CharField(widget=forms.TextInput(attrs={'id': 'user', 'class': 'input-entrar', 'placeholder': 'Digite seu usuário...'}))
    senha = forms.CharField(widget=forms.PasswordInput(attrs={'id': 'senha', 'class': 'input-entrar', 'placeholder': 'Digite sua senha...'}))