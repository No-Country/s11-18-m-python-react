from django.db import models

class RoutineManager(models.Manager):
    
    
    def type_routine(self, **filters):
        
        if filters["tipo"].lower() == 'premium':
            paid = True
            premium = True
            return self.filter(
            is_paid =  paid,
            is_user_premium = premium
            ).order_by('created')
            
        elif filters["tipo"].lower() == 'pagas':
            paid = True
            premium = False
            return self.filter(
            is_paid =  paid,
            is_user_premium = premium
            ).order_by('created')
            
        elif filters["tipo"].lower() == 'free':
            paid = False
            premium = False
            return self.filter(
            is_paid =  paid,
            is_user_premium = premium
            ).order_by('created')
          
        else:  
            return self.all().order_by('created')
        
        
        
    def filter_ruotine(self, **filters):
        
        if filters["categoria"] and filters["dificultad"]:
            
            return self.filter(
                categorie__name__icontains = filters["categoria"].capitalize(),
                difficulty__icontains = filters["dificultad"].capitalize(),
            ).order_by('created')
            
        elif filters["categoria"]:
            return self.filter(
                categorie__name__icontains = filters["categoria"].capitalize(),
            ).order_by('created')
            
        elif filters["dificultad"]:
                return self.filter(
                difficulty__icontains = filters["dificultad"].capitalize(),
            ).order_by('created')
                
        else:
            return self.all().order_by('created')
        


