from django.contrib import admin
from models import Cadastro

#Register your models here.

@admin.register(Cadastro)
class Cadastro_Admin(admin.ModelAdmin):
    lista = ['id', 'usuario', 'genero']