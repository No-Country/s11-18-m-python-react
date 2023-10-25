from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from gym_mate.settings.base import AUTH_USER_MODEL 

from .managers import CustomUserManager

#Diet model
class Diet(models.Model):
    name_diet = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name_diet

#Seguidores
class Followers(models.Model):
    follower = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='follower')
    followed = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='followed_user')
    
    class Meta:
        verbose_name = 'Follower'
        verbose_name_plural = 'Followers'
        
    def __str__(self):
        return f"seguidor: {self.follower.username} -- sigue a: {self.followed.username}"
     

# Creamos el UserManager personalizado con los metodos para crear
class UserManager(BaseUserManager):
    
    def create_user(self, first_name, last_name, email, username, password = None):
        
        if not email:
            raise ValueError('Usuario debe tener un correo')
        
        #Creamos el usuario
        user = self.model(
            username = username, 
            email = self.normalize_email(email),
            first_name = first_name,
            last_name = last_name 
        )
        
        #encriptamos la password y guardamos en database
        user.set_password(password)
        user.save()
    
        return user
    
    def create_superuser(self, first_name, last_name, email, username, password):
        
        #Creamos el usuario
        user = self.create_user(
            first_name = first_name,
            last_name = last_name,
            email = email,
            username = username,
            password = password
        )
        
        user.is_staff = True
        user.is_superuser = True
        user.save()
        
        return user

    #def last_login_update(self):
     #   user.last_login = 

# Creamos User personalizado
class User(AbstractUser):

    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other')
    )

    username = models.CharField(unique=True, max_length=100)
    email = models.EmailField(unique=True, max_length=255)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    age = models.PositiveSmallIntegerField(blank=True, null=True)
    height = models.FloatField(blank=True, null=True)
    weight = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='O')
    is_coach = models.BooleanField(default=False)
    is_premium = models.BooleanField(default=False)
    image_photo = models.ImageField(upload_to='users/img', blank=True, null=True)
    bio = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_superuser = models.BooleanField(default=False)
    
    #podemos usar models.SET_NULL en caso de querer la relacion aca y que no haga falta eliminar dietas en cascada
    #diet = models.OneToOneField(Diet, on_delete=models.SET_NULL)
    
    objects = UserManager()
    custom_objects = CustomUserManager()
        
    def __str__(self):
        return self.username
    
    
    REQUIRED_FIELDS = ['first_name', 'last_name', 'email']
