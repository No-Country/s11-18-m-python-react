from django.urls import path 
from apps.users.api.user_views import (
    UserLogin,
    UserRegister,
    UserMeAPIview,
    UserLogout,
    UserViewPerfilAPIView,
    CoachAPIView,
    UserSearchAPIView,
    UserFollowAPIView,
    UserUnfollowAPIView,
    UserFollowedsAPIView
)

# User Registro, Login, Detalles, Logout 
urlpatterns = [
    path('register/', UserRegister.as_view(), name='register'),
    path('me/', UserMeAPIview.as_view(), name='me'),
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', UserLogout.as_view(), name='logout'),
    
]

# Home search (users, rutinas)
urlpatterns += [ 
    path('home/', UserSearchAPIView.as_view(), name='search'),
    path('user/coachs/', CoachAPIView.as_view(), name='coachs'),       #Coach destacados
    path('user/followeds/', UserFollowedsAPIView.as_view(), name='followeds')                                                                           #Users seguidos
]
 
 
# User perfil, follow y unfollow
urlpatterns += [ 

    path('user/<int:pk>/', UserViewPerfilAPIView.as_view(), name='user-view'),
    path('user/<int:pk>/follow/', UserFollowAPIView.as_view(), name='user-follow'),
    path('user/<int:pk>/unfollow/', UserUnfollowAPIView.as_view(), name='user-unfollow')

]    

    