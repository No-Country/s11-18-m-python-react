from apps.users.models import User 
from rest_framework import serializers 
from gym_mate.settings.base import AUTH_USER_MODEL

from django.contrib.auth.hashers import check_password

class UserTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ('id','username', 'email')
        read_only_fields = ('id',)


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ('id','first_name', 'last_name', 'username', 'email', 'password')
        read_only_fields = ('id',)
    
    #validar password1 y password2 venido del frontend    
    def validate_password(self, value):
        confirm_password = self.initial_data.get('confirm_password')
        
        if confirm_password:
            #si passwords son distintos, error
            if value != confirm_password:
                raise serializers.ValidationError('passwords do not match') 
        return value
        
    #Modificar el metodo create para encriptar password desde el metodo del modelo user create_user
    def create(self, validated_data):
        #eliminamos la password de validate_data(buena_practica que no quede en cache ni nada antes de ser nuevamente hash), para pasarlo nuevamente 
        password = validated_data.pop('password')
        # Utiliza el método create_user del modelo personalizado de usuario para crear un usuario
        
        user = User.objects.create_user(**validated_data, password = password)
        user.save()
        return user
    
  #  def last_login(self, user):
   #     user = User.objects.
    
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

        
    def validate_password(self, value):
        email = self.initial_data.get('email')
        print(email)
        try:
            user = AUTH_USER_MODEL.objects.get(email=email)
            if not check_password(value, user.password):
                raise serializers.ValidationError("Invalid password")
        except User.DoesNotExist:
            raise serializers.ValidationError("User not found")
        print(user.is_coach)
        
        return value
    
class UserMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        exclude = ('password','created_at', 'is_superuser') 
        
        
    