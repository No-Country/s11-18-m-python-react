# Rest
from rest_framework.generics import (
    ListAPIView,
)
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication 
from rest_framework.permissions import IsAuthenticated
# Django
from django.shortcuts import render
# Models
from .models import Routine
# Serializers
from .serializers import RoutineSerializersList, RoutineFavoriteSerializers



class TypeOfRoutineListAPIView(ListAPIView):
    """ Filter routines based on the type of routine premium - paid - free """
    serializer_class = RoutineSerializersList
    
    def get_queryset(self):
        
        is_routine = self.request.query_params.get('tipo', None)
        
        return Routine.objects.type_routine(
            tipo = is_routine,
        )


class FilterRoutinesByCategoriesListAPIView (ListAPIView):
    """Adjust routines based on their difficulty and category"""
    
    serializer_class = RoutineSerializersList

    def get_queryset(self):
        
        category = self.request.query_params.get('categoria', None)
        difficulty = self.request.query_params.get('dificultad', None)
        
        return Routine.objects.filter_ruotine(
            categoria = category,
            dificultad = difficulty,
        )
        

class FilterRoutinesByCoachListAPIView (ListAPIView):
    
    serializer_class = RoutineSerializersList
    
    def get_queryset(self):
        
        user = self.request.user.is_coach
        
        if user:
    
            return Routine.objects.filter(
                id = self.request.user.id,
            )