from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


# Creamos el UserManager personalizado con los metodos para crear
class UserManager(BaseUserManager):
    
    def create_user(self, first_name, last_name, ):
        pass
    
        #return user
    def create_superuser(self):
        pass
        
        #return user


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
    age = models.PositiveSmallIntegerField()
    height = models.FloatField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='O')
    is_coach = models.BooleanField(default=False)
    image_photo = models.ImageField(upload_to='users/img', blank=True, null=True)
    bio = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    #diet = models.ForeignKey()
    
    def __str__(self):
        return self.username
    
    REQUIRED_FIELDS = ['first_name', 'last_name']
