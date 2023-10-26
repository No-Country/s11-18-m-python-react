from apps.users.models import User

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated, AllowAny
from apps.users.authenticate import CustomTokenAuthentication


from .user_serializers import (
    UserTokenSerializer,
    UserRegisterSerializer,
    UserMeSerializer,
    UserLoginSerializer,
    UserViewPerfilSerializer
)


# REGISTRO
class UserRegister(APIView):
    
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
            return Response({'error':'Incorrect email or password'}, status=status.HTTP_401_UNAUTHORIZED)
        
        
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
            user_serializer = UserViewPerfilSerializer(user)
            
        
            return Response({
                'user':user_serializer.data
            }, status=status.HTTP_200_OK)
                
        return Response({
        'error':'User not found'
        }, status=status.HTTP_404_NOT_FOUND)
