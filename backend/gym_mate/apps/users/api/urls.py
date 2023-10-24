from django.urls import path 
from apps.users.api.user_views import (
    UserLogin,
    UserRegister,
    UserMeAPIview,
    UserLogout,
    UserViewPerfilAPIView,
    CoachAPIView,
    UserSourceAPIView,
    UserFollowAPIView,
    UserUnfollowAPIView
)

urlpatterns = [
    path('register/', UserRegister.as_view(), name='register'),
    path('me/', UserMeAPIview.as_view(), name='me'),
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', UserLogout.as_view(), name='logout'),
    
    path('user/<int:pk>/', UserViewPerfilAPIView.as_view(), name='user-view'),
    
    path('user/filter/coach/', CoachAPIView.as_view(), name='coach'),
    path('user/source/', UserSourceAPIView.as_view(), name='source'),
    path('user/<int:pk>/follow/', UserFollowAPIView.as_view(), name='user-follow'),
    path('user/<int:pk>/unfollow/', UserUnfollowAPIView.as_view(), name='user-unfollow')
    
    
    
]