from django.db import models

class RoutineManager(models.Manager):
    
    
    # def type_routine(self, routine):
        
    #     if routine == 'premium':
    #         paid = True
    #         premium = True
    #     elif routine == 'pagas':
    #         paid = True
    #         premium = False
    #     else:
    #         paid = False
    #         premium = False
            
    #     return self.filter(
    #         is_paid =  paid,
    #         is_user_premium = premium
    #     ).order_by('created')

    def type_routine(self, **filters):
        
        if filters["tipo"] == 'premium':
            paid = True
            premium = True
            return self.filter(
            is_paid =  paid,
            is_user_premium = premium
            ).order_by('created')
            
        elif filters["tipo"] == 'pagas':
            paid = True
            premium = False
            return self.filter(
            is_paid =  paid,
            is_user_premium = premium
            ).order_by('created')
            
        elif filters["tipo"] == 'free':
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
                categorie__name = filters["categoria"],
                difficulty = filters["dificultad"],
            ).order_by('created')
            
        elif filters["categoria"]:
            return self.filter(
                categorie__name = filters["categoria"],
            ).order_by('created')
            
        elif filters["dificultad"]:
                return self.filter(
                difficulty = filters["dificultad"],
            ).order_by('created')
                
        else:
            return self.all().order_by('created')