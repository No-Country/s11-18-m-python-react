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
from .serializers import RoutineSerializersList



class TypeOfRoutineListAPIView(ListAPIView):
    
    serializer_class = RoutineSerializersList
    
    def get_queryset(self):
        
        is_routine = self.request.query_params.get('tipo', None)
        is_routine.capitalize()
        
        return Routine.objects.type_routine(
            tipo = is_routine,
        )


class FilterRoutinesByCategoriesListAPIView (ListAPIView):
    
    serializer_class = RoutineSerializersList

    def get_queryset(self):
        
        category = self.request.query_params.get('categoria', None)
        difficulty = self.request.query_params.get('dificultad', None)
        category.capitalize()
        difficulty.capitalize()
        return Routine.objects.filter_ruotine(
            categoria = category,
            dificultad = difficulty,
        )