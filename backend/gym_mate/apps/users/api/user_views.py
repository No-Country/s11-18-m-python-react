from rest_framework.response import Response 

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

from .user_serializers import UserTokenSerializer

class Login(ObtainAuthToken):
    
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
        
        print(adsfasd)