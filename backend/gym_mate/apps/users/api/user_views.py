from apps.users.models import User

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated, AllowAny
from apps.users.authenticate import CustomTokenAuthentication


from .user_serializers import UserTokenSerializer, UserRegisterSerializer, UserDetailSerializer


# REGISTRO
class UserRegister(APIView):
    
    #Enviamos parametros por POST
    def post(self, request):
        
        #validacion de password frontend
        user_serializer = UserRegisterSerializer(data = request.data)
        
        if user_serializer.is_valid():
            user = user_serializer.save()
            
            token = Token.objects.create(user = user)
            
        else:
            return Response(user_serializer.errors)        
    
        return Response({
            'Token': token.key,
            'User creado': user_serializer.data
        })


# LOGIN
class UserLogin(ObtainAuthToken):
    
    #aca llegan usuario y contraseña mediante POST
    def post(self,request, *args, **kwargs):
        
        login_serializer = self.serializer_class(data = request.data, context = {'request':request})

        if login_serializer.is_valid():
            print('Paso validacion')
            
            #obtenemos el usuario mediante validate_data
            print(login_serializer.validated_data['user'])
            
            user = login_serializer.validated_data['user']
            
            user_serializer = UserTokenSerializer(user)
            
            #obtenemos o creamos, en caso de crear token
            token, created = Token.objects.get_or_create(user = user)
            
            if created:
                return Response({
                    'token':token.key,
                    'user': user_serializer.data
                })
    
            #si el token ya existe entonces eliminamos y volvemos a crear
            else:
                token.delete()
                token = Token.objects.create(user = user)
                return Response({
                    'token':token.key,
                    'user': user_serializer.data
                })
    
        else:
            return Response({'error': 'invalid username or password'})
        
        
# LOGOUT
class UserLogout(APIView):
    
    authentication_classes = [CustomTokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        
    
        token = request.auth
        token_key = token.key 
            
        token.delete()
            
        return Response({"Logout succesfly"})
        
    
# DETALLES USER
class UserDetailAPIview(APIView):
    
    authentication_classes = [CustomTokenAuthentication]
    permission_classes = [IsAuthenticated]  # Requiere que el usuario esté autenticado

    def get(self, request):
        
        user = request.user
        
        user_serializer = UserDetailSerializer(user)
        
        return Response({'user':user_serializer.data})
