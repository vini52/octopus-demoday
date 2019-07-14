from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Cadastro(models.Model):
    medalhas_opcoes = [
        ('oc', 'Octopus'),
        ('vt', 'Ventosa'),
        ('tc', 'Tentáculo'),
        ('tn', 'Tinta'),
        ('pv', 'Perseverante'),
        ('pc', 'Parceiro'),
        ('an', 'Aniversário'),
        ('ft', 'Festivo')
    ]

    nome = models.CharField(max_length=100)
    usuario = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)
    email = models.EmailField()
    nascimento = models.DateField()
    telefone = models.CharField(max_length=12, default='')
    pontos = models.IntegerField(default=0)
    medalhas = models.CharField(choices=medalhas_opcoes, max_length=2, default='oc')

    def __str__(self):
        return self.nome

    class Meta:
        db_table = 'Cadastro'