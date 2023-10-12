from django.urls import path 
from apps.users.api.user_views import UserLogin, UserRegister

urlpatterns = [
    path('register/', UserRegister.as_view(), name='register'),
    path('login/', UserLogin.as_view(), name='login')
    
]