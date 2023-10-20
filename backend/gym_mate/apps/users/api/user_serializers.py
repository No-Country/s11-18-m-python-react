from apps.users.models import User 
from rest_framework import serializers 

from django.contrib.auth.hashers import check_password

class UserTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ('username', 'email')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("__all__")
