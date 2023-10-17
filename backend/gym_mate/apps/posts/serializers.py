from rest_framework import serializers, pagination
from .models import *


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ["content",'image_url','video_url','user_id']

    def create(self, validated_data):
        # validated_data['user'] = self.context['request'].user
        post = Posts.objects.create(**validated_data)
        post.save()
        return post      
    
class CommmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentPost
        fields = ("__all__")


class PaginationSerializer(pagination.PageNumberPagination):

    page_size = 5
    max_page_size = 50


# Building: Post Detail View ( path('posts/<pk>/', PostDetailView.as_view(), name="post_detail"),  ) Endpoint to check a particular post filtered by its id
# Building: Post detail creator view ( path('posts/created-by/<pk>/', PostDetailCreatorView.as_view(), name="post_detail_creator"), ) # Endpoint to filter all posts created by certain user
