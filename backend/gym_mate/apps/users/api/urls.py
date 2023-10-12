from django.urls import path 
from apps.users.api.views import Login

urlpatterns = [
    path('login/', Login.as_view(), name='login')
]