from apps.users.models import User 
from rest_framework import serializers 

from apps.posts.serializers import PostSerializer
from apps.coach_users.api.serializers import RatingCoachSerializer
from apps.users.models import Followers

from django.utils import timezone
from django.contrib.auth.hashers import check_password

class FollowersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Followers
        fields = ('follower', 'followed')
        
class FollowedHomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'is_coach', 'is_premium', 'image_photo')
        

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
        user.last_login = timezone.now()
        user.save()
        return user
    
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(allow_blank=False)

    def validate_email(self, value):
        try:
            User.objects.get(email=value)
        except User.DoesNotExist:
            raise serializers.ValidationError("Email not exist")
        return value   
         
    def validate_password(self, value):
        email = self.initial_data.get('email')  
 
        user = User.objects.filter(email=email).first()     
        if user:
            if not check_password(value, user.password):
                raise serializers.ValidationError("Invalid password")
    
        return value
    
    def validate(self, data):
        email = data['email']
        user = User.objects.filter(email = email).first()
        user.last_login = timezone.now()
        user.save()
        return data

#UserMedetail, editar detalles   
class UserMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        exclude = ('last_login', 'is_staff','is_active', 'date_joined', 'password','created_at', 'is_superuser', 'groups', 'user_permissions',) 
        
    def validate_age(self, value):
        if value <= 0:
            raise serializers.ValidationError('Age can´t be 0')
        
        return value
    
#Userviewperfil 
class UserViewPerfilSerializer(serializers.ModelSerializer):
    
    posts = PostSerializer(many=True, read_only=True, source='user_posts')
    rating_coach = RatingCoachSerializer(many=True, read_only=True, source='ratings_received')
    rating_coach_average = RatingCoachSerializer(many=True, read_only=True, source='ratings_received')
    followers_users = FollowersSerializer(many=True, read_only=True, source='followed_user')
    followed_users = FollowersSerializer(many=True, read_only=True, source='follower')
    
    class Meta:
        model = User 
        fields = ('id','username','first_name', 'last_name', 'is_coach', 'rating_coach_average', 'rating_coach', 'bio', 'image_photo', 'posts', 'followers_users', 'followed_users')
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
       
       #followers counts
        followers = data.get('followers_users',[])
        followeds = data.get('followeds_users',[])
        
        count_followers = len(followers)
        count_followeds = len(followeds)
        
        data['followers_users'] = count_followers 
        data['followed_users'] = count_followeds
        
        #rating_coach_average
        rating_total = 0
        for rating_data in (data['rating_coach_average']):
            rating_total += rating_data['rating']
      
        if len(data['rating_coach']) != 0:
            rating_average = rating_total / len(data['rating_coach'])
            data['rating_coach_average'] = rating_average
        
        
        #is coach
        is_coach = data.get('is_coach')
        if is_coach == False:
            data.pop('rating_coach')
            data.pop('rating_coach_average')
            
        for post_data in data['posts']:
            post_data.pop('id')
            post_data.pop('user')
        
        return data
    
    
class UserFollowedsSerializer(serializers.ModelSerializer):
    
    followed_users = FollowersSerializer(many=True, read_only=True, source='follower')
    class Meta:
        model = User 
        fields = ('id', 'username', 'followed_users')
        
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        
        updated_followed_users = []
        
        for followed_user in data['followed_users']:
            user = User.objects.filter(pk = followed_user['followed']).first()
            
            followed_serializer = FollowedHomeSerializer(user)
            updated_followed_users.append(followed_serializer.data) 
            
        data['followed_users'] = updated_followed_users 
        return data

    

        
    
