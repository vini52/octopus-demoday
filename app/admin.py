from django.contrib import admin
from app.models import Cadastro

#Register your models here.

admin.site.register(Cadastro)
class Cadastro_Admin(admin.ModelAdmin):
    lista = ['id', 'usuario', 'genero']