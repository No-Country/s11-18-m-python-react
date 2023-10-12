from apps.users.models import User 
from rest_framework import serializers 

class UserTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ('username', 'email')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("__all__")
