from django.shortcuts import render, redirect
from app.models import Cadastro
from app.forms import CadastroForm, LoginForm

# Create your views here.

def mostrar_cadastro(request):
    form = CadastroForm(request.POST or None)
    msg = ''
    if form.is_valid():
        form.save()
        form = CadastroForm()
        msg = 'Cadastro criado com sucesso'
        return redirect('/octopus/user')
    contexto = {
        'form' : form,
        'msg' : msg
    }
    return render(request, 'cadastro.html', contexto)

def mostrar_index(request):
    formulario = LoginForm(request.POST or None)
    msg = ''
    if formulario.is_valid():
        usuario = formulario.cleaned_data['usuario']
        senha = formulario.cleaned_data['senha']
        user = Cadastro.objects.filter(usuario=usuario).last()
        todos = Cadastro.objects.all()
        usuario_logado = Cadastro.objects.filter(nome=user).first()
        if not user or user.senha != senha:
            msg = 'Usuário ou senha incorretos.'
        else:
            return render(request, 'octopus.html', {'user': user, 'usuario_logado': usuario_logado})

    return render(request, 'index.html', {'form': formulario, 'msg': msg})


def logout_user(request):
    logout(request)
    return redirect('/')