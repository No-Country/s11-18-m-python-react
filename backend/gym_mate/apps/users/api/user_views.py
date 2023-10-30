from apps.users.models import User, Followers

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from apps.users.authenticate import CustomTokenAuthentication


from .user_serializers import (
    UserTokenSerializer,
    UserRegisterSerializer,
    UserMeSerializer,
    UserLoginSerializer,
    UserViewPerfilSerializer,
    UserFollowedsSerializer
)

#filtros buscador home

# REGISTRO
class UserRegister(APIView):
    
    serializer_class = UserRegisterSerializer
      
    def get(self, request):
        serializer = UserRegisterSerializer()
        return  Response (serializer.data)
    
    #Enviamos campos register por POST
    def post(self, request):
        
        user_serializer = UserRegisterSerializer(data = request.data)
        
        if user_serializer.is_valid():
            user = user_serializer.save()
            
            token = Token.objects.create(user = user)
                
            return Response({
            'token': token.key,
            'user': user_serializer.data,
            'message': 'User created successfully!'
            }, status=status.HTTP_201_CREATED)

            
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)        


# LOGIN
class UserLogin(APIView):
  
    def get(self, request): 
        serializer = UserLoginSerializer()
        return Response(serializer.data)
    # Enviamos campos login por POST
    def post(self,request):
        
        login_serializer = UserLoginSerializer(data = request.data)

        if login_serializer.is_valid():
            print('Paso validacion')
            
            #obtenemos el usuario mediante validate_data
            email = login_serializer.validated_data['email']
            user = User.objects.filter(email = email).first()
            
            user_serializer = UserTokenSerializer(user)
            
            #obtenemos o creamos, en caso de crear token
            token, created = Token.objects.get_or_create(user = user)
            
            if created:
                return Response({
                    'token':token.key,
                    'user': user_serializer.data,
                    'message': 'Login successfully!'
                }, status=status.HTTP_200_OK)
    
            #si el token ya existe entonces eliminamos y volvemos a crear
            else:
                token.delete()
                token = Token.objects.create(user = user)
                return Response({
                    'token':token.key,
                    'user': user_serializer.data,
                    'message': 'Login successfully!'
                }, status=status.HTTP_200_OK)
    
        else:
            return Response(login_serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
        
        
# LOGOUT
class UserLogout(APIView):
    
    authentication_classes = [CustomTokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        
        #request.auth posible usando el Token de rest_framework.authtoken
        #token = request.auth
      
        #obtenemos token del user autenticado
        token = Token.objects.filter(user = request.user).first()
        token.delete()
            
        return Response({'message':'Logout successfully!'}, status=status.HTTP_200_OK)
        
    
# detalles user editar (DATOS PERSONALES)
class UserMeAPIview(APIView):
    
    authentication_classes = [CustomTokenAuthentication]
    permission_classes = [IsAuthenticated] 

    #GET
    def get(self, request):
        
        user = request.user 
        user_serializer = UserMeSerializer(user)
        
        return Response({
            'user':user_serializer.data
        }, status=status.HTTP_200_OK)
        
    #PUT
    def put(self, request):
        user = request.user 
        user_serializer = UserMeSerializer(instance=user, data=request.data)
        
        if user_serializer.is_valid():
            user_serializer.save()
            
            return Response({
                'message': 'Update successfully!',
                'user': user_serializer.data
            }, status=status.HTTP_200_OK)
            
        else:
            return Response({
                'error':user_serializer.errors
            },status=status.HTTP_400_BAD_REQUEST)
        
    #PATCH
    def patch(self, request):
        user = request.user 
        user_serializer = UserMeSerializer(instance=user, data=request.data, partial=True)
        
        if user_serializer.is_valid():
            user_serializer.save()
            
            return Response({
                'message': 'Update successfully!',
                'user': user_serializer.data
            }, status=status.HTTP_200_OK)
            
        else:
            return Response({
                'error':user_serializer.errors
            },status=status.HTTP_400_BAD_REQUEST)
        
# View perfil
class UserViewPerfilAPIView(APIView):
    
    authentication_classes = [CustomTokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pk = None):
        
        if pk is not None:
            user = User.objects.filter(pk = pk).first()
            if user:
                user_serializer = UserViewPerfilSerializer(user)
            
                return Response({
                    'user':user_serializer.data
                }, status=status.HTTP_200_OK)
                
        return Response({
        'error':'User not found'
        }, status=status.HTTP_404_NOT_FOUND)


# Follow 
# arreglar si ya existe
class UserFollowAPIView(APIView):
    
    authentication_classes = [CustomTokenAuthentication] 
    permission_classes = [IsAuthenticated]
    
    def post(self, request, pk):
        user_follower = request.user
        user_followed = User.objects.filter(pk = pk).first()
        
        if user_followed:
            Followers.objects.create(follower=user_follower, followed=user_followed)
                
            return Response({
                'message':f'User {user_followed.username} followed!'
            }, status=status.HTTP_200_OK)
    
        return Response({
            'error':'not follow'
        }, status=status.HTTP_404_NOT_FOUND)
      
# Unfollow  
class UserUnfollowAPIView(APIView):
    
    authentication_classes = [CustomTokenAuthentication] 
    permission_classes = [IsAuthenticated]
    
    def post(self, request, pk = None):
        user = request.user
        
        user_followed = User.objects.filter(pk=pk).first()
        if user_followed:
            follow = Followers.objects.filter(follower=user, followed=user_followed) 
            if follow:
                follow.delete()
                    
                return Response({
                    'message': f'User {user_followed.username} unfollowed!'
                })
        
        return Response({
            'error':'not unfollow'
        })

# Home-search 
class UserSearchAPIView(APIView):
    
    def get(self, request):
        search = request.query_params.get('search', None)
    
        if search is not None:
            users = User.custom_objects.search_user(search)
            
            if users:
                users_serializer = UserViewPerfilSerializer(users, many=True)
                return Response({
                    'users':users_serializer.data
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    'error':'Search not found'
                }, status=status.HTTP_404_NOT_FOUND)
                
        return Response({
            'error': 'not search'
        })
        
# Home-followeds

class UserFollowedsAPIView(APIView):
    
    authentication_classes = [CustomTokenAuthentication] 
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        
        user = request.user
        
        user_serializer = UserFollowedsSerializer(user)
        
        return Response({
            'user': user_serializer.data
        })
        
class CoachAPIView(APIView):
    
    def get(self, request):
        
        users = User.custom_objects.coach()
        users_serializer = UserViewPerfilSerializer(users, many=True)
        
        return Response({
            'users': users_serializer.data
        }, status=status.HTTP_200_OK)
        
