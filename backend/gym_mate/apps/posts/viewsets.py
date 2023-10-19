from .serializers import *
from rest_framework import permissions, viewsets, response, status, mixins
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.db.models import Sum

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

        total_likes = Junction_likes.objects.aggregate(total_likes = Sum('total_likes') )
        total_comments = CommentPost.objects.aggregate(comment_total_comments = Sum('comment_total_comments'))
        total_reposts = Junction_repost.objects.aggregate(total_repost = Sum('total_repost') )
        
        for serialized_post in data:
            serialized_post['comment_count'] = total_comments
            serialized_post['like_count'] = total_likes 
            serialized_post['repost_count'] = total_reposts
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
            serializer.save()
            return Response({
                'message': 'Post liked!'
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
            serializer.save()
            return Response({
                'message': 'Reposted successfully!'
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)