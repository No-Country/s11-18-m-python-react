from .serializers import *
from rest_framework import permissions, views, response, status

class PostView(views.APIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    #authentication_classes = 

    # Create post
    def post(self, request):
        
        serializer  = PostSerializer(data = request.data, context = {'request': request})
        if serializer.is_valid():
            post = serializer.save()
            return response.Response({
                'message': 'Post created successfully!',
                'Post': PostSerializer(post).data
            }, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
        