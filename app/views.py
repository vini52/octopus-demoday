from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from app.models import Cadastro

# Create your views here.

def mostrar_index(request):
    return render(request, 'index.html')

@csrf_protect
@login_required(login_url='/')
def mostrar_octopus(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/octopus/user')
        else:
            messages.error(request, 'Usuário ou Senha Inválidos')
            return redirect('/')
    return HttpResponse('')

def mostrar_octopus_logado(request):
    nomes = Cadastro.objects.all()
    return render(request, 'octopus.html', {'nomes': nomes})
