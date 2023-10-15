from django.urls import path 
from apps.users.api.user_views import (
    UserLogin,
    UserRegister,
    UserDetailAPIview,
    UserLogout
)

urlpatterns = [
    path('register/', UserRegister.as_view(), name='register'),
    path('me/', UserDetailAPIview.as_view(), name='me'),
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', UserLogout.as_view(), name='logout')
    
    
]