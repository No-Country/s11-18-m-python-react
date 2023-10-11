from django.db import models


class Diet(models.Model):
    name_diet = models.CharField()
    description = models.CharField()
