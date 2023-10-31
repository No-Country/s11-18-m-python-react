from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import AuthenticationFailed

class CustomTokenAuthentication(TokenAuthentication):
    
    def authenticate(self, request):
        
        #obtenemos el "Bearer token"
        token_authorization = request.META.get('HTTP_AUTHORIZATION')
        
        if token_authorization:
            if token_authorization.startswith('Bearer '):
                #separamos el bearer token para tener solo el token
                token = token_authorization.split(' ')[1]
                
                #obtenemos el objeto token, para tener token.user y token.key
                token = Token.objects.filter(key = token).first()
                
                if token:
                    user = token.user  
                    return user,token     
            
            raise AuthenticationFailed('Token is not valid')
        raise AuthenticationFailed('Token not provided')
            
          
        
        
     