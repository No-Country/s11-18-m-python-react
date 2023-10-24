from .serializers import *
from rest_framework import permissions, viewsets, response, status, mixins
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
                'Post': serializer.data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)    
    
    def list(self, request, *args, **kwargs):
        queryset = Posts.objects.all().order_by('-created')
        serializer = PostSerializer(queryset, many=True)  
        data = serializer.data

        return Response(data)
    
    def retrieve(self, request, pk = None):
        queryset = Posts.objects.all()
        post = get_object_or_404(queryset, pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)
    


class CommentViewSet(viewsets.ModelViewSet):

    serializer_class = CommmentPostSerializer
    pagination_class = PaginationSerializer
    queryset = CommentPost.objects.all().order_by('-created')

    def create(self, request, *args, **kwargs):
        serializer = CommmentPostSerializer(data = request.data)
        if serializer.is_valid():
            comment = serializer.save()
            serializer.update_comment_value({'comment_post': comment.comment_post.id})
            return Response({
                'message': 'Comment created',
                'Comment': serializer.data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        



class LikeViewSet(viewsets.ModelViewSet):

    serializer_class = LikeSerializer
    pagination_class = PaginationSerializer
    queryset = Junction_likes.objects.all().order_by('-created')
    
    def create(self, request, *args, **kwargs):        
        serializer = LikeSerializer(data = request.data)
        if serializer.is_valid():
            like = serializer.save()
            #serializer.update_like_value({'likes_post': like.likes_post.id})
            return Response({
                'message': 'Done'
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        



class RepostViewSet(viewsets.ModelViewSet):

    serializer_class = RepostSerializer
    pagination_class = PaginationSerializer
    queryset = Junction_repost.objects.all().order_by('-created')
    
    def create(self, request, *args, **kwargs):        
        serializer = RepostSerializer(data = request.data)
        if serializer.is_valid():
            repost = serializer.save()
            serializer.update_repost_value({'repost_post': repost.repost_post.id})
            return Response({
                'message': 'Reposted successfully!'
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)