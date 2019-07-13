# from django.shortcuts import render

# # Create your views here.

# def mostrar_index(request):
#     return render(request, 'index.html')

# def mostrar_octopus(request):
#     return render(request, 'octopus.html')

from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth import authenticate, login
from django.contrib import messages

# Create your views here.

def mostrar_index(request):
    return render(request, 'index.html')

@csrf_protect
def mostrar_octopus(request):
    if request.POST:
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username)
        print(password)
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            messages.error(request, 'Usuário ou Senha Inválidos')
    return redirect('')
    #return render(request, 'octopus.html')