from django.urls import path 
from backend.gym_mate.apps.users.api.user_views import Login

urlpatterns = [
    path('login/', Login.as_view(), name='login')
]