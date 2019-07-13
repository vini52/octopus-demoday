from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Cadastro(models.Model):
    generos = [('M', 'Masculino'),
               ('F', 'Feminino'),
               ('SN', 'Não Informado'),]

    nome = models.CharField(max_length=100)
    genero = models.CharField(max_length=2, choices=generos)
    email = models.EmailField()
    celular = models.CharField(max_length=11)
    nascimento = models.DateField()
    pais_origem = models.CharField(max_length=50)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    senha = models.CharField(max_length=8)

    def __str__(self):
        return self.nome

    class Meta:
        db_table = 'Cadastro'