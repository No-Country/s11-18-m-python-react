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



class RoutineProductUser(ListAPIView):
    """Class that represents a list of a user's routine """
    
    serializer_class = RoutineSerializersList
  
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user.id
        return Routine.objects.routine_user(user)
