from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ("__all__")

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        post = Posts.objects.create(**validated_data)
        post.save()
        return post      


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagePost
        fields = ("__all__")

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoPost
        fields = ("__all__")

class CommmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentPost
        fields = ("__all__")



# Building: Post Detail View ( path('posts/<pk>/', PostDetailView.as_view(), name="post_detail"),  ) Endpoint to check a particular post filtered by its id
# Building: Post detail creator view ( path('posts/created-by/<pk>/', PostDetailCreatorView.as_view(), name="post_detail_creator"), ) # Endpoint to filter all posts created by certain user
