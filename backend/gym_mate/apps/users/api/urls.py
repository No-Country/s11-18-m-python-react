from django.urls import path 
from apps.users.api.user_views import (
    UserLogin,
    UserRegister,
    UserMeAPIview,
    UserLogout,
    UserViewPerfilAPIView
)

urlpatterns = [
    path('register/', UserRegister.as_view(), name='register'),
    path('me/', UserMeAPIview.as_view(), name='me'),
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', UserLogout.as_view(), name='logout'),
    
    path('user/<int:pk>', UserViewPerfilAPIView.as_view(), name='user-view'),
    
    
]