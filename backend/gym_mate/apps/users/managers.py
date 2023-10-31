from django.db import models 

#Personalizamos filtros para el modelo user
class CustomUserManager(models.Manager):
    
    def coach(self):
        return self.filter(is_coach = True)
    
    def search_user(self, search):
        
        if search != '':
            return self.filter(username__icontains = search)
        else:
            return self.none()