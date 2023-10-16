from django.db import models

class RoutineManager(models.Manager):
    
    def routine_user(self, id):
        return self.filter(
            id_user__id = id
        )