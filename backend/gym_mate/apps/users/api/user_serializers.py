from apps.users.models import User 
from rest_framework import serializers 

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
        
        #si passwords son distintos, error
        if value != confirm_password:
            raise serializers.ValidationError('passwords do not match') 
        return value
        
    #Modificar el metodo create para encriptar password desde el metodo del modelo user create_user
    def create(self, validated_data):
        # Utiliza el método create_user del modelo personalizado de usuario para crear un usuario
        user = User.objects.create_user(**validated_data)
        user.save()
        return user
    
    
class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        exclude = ('created_at', 'is_superuser') 
        
        
    