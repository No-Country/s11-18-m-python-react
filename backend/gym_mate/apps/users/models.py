from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


#Diet model
class Diet(models.Model):
    name_diet = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)


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
    weight = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='O')
    is_coach = models.BooleanField(default=False)
    image_photo = models.ImageField(upload_to='users/img', blank=True, null=True)
    bio = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_superuser = models.BooleanField(default=False)
    
    #podemos usar models.SET_NULL en caso de querer la relacion aca y que no haga falta eliminar dietas en cascada
    #diet = models.OneToOneField(Diet, on_delete=models.SET_NULL)
    
    objects = UserManager()
    

        
    def __str__(self):
        return self.username
    
    
    REQUIRED_FIELDS = ['first_name', 'last_name', 'email']
