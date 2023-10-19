from .serializers import *
from rest_framework import permissions, viewsets, response, status
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

class PostView(viewsets.ModelViewSet):

    serializer_class = PostSerializer
    pagination_class = PaginationSerializer
    queryset = Posts.objects.all().order_by('-created')

    # Create post
    def create(self, request, *args, **kwargs):        
        serializer  = PostSerializer(data = request.data)
        if serializer.is_valid():
            post = serializer.save()
            return Response({
                'message': 'Post created successfully!',
                'Post': PostSerializer(post).data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
    
    def list(self, request, *args, **kwargs):
        queryset = Posts.objects.all().order_by('-created')
        serializer = PostSerializer(queryset, many=True)        
        return Response(serializer.data)
    
    def retrieve(self, request, pk = None):
        queryset = Posts.objects.all()
        post = get_object_or_404(queryset, pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
class CommentViewSet(viewsets.ModelViewSet):

    serializer_class = CommentPostSerializer
    pagination_class = PaginationSerializer
    queryset = CommentPost.objects.all().order_by('-created')


    #def create(self, request, *args, **kwargs):
    #    serializer = CommentPostSerializer(data = request.data)
    #    if serializer.is_valid():
    #        comment = serializer.save()
    #        return Response({
    #            'message': 'Comment created',
    #            'Comment': CommentPostSerializer(comment).data
    #        }, status=status.HTTP_201_CREATED)
    #    else:
    #        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST) 