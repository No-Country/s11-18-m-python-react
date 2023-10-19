from rest_framework import serializers, pagination
from .models import Posts, CommentPost,Junction_likes,Junction_repost


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Posts
        fields = ["content",'image_url','video_url','user','id']

    def create(self, validated_data):
        # validated_data['user'] = self.context['request'].user
        post = Posts.objects.create(**validated_data)
        post.save()
        return post 
    
class CommmentPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentPost
        fields = ["comment_content", "comment_post", "comment_user"]

    def create(self, validated_data):
        comment = CommentPost.objects.create(**validated_data)
        comment.save()
        return comment
    
    #def get_comment_user_id(self, obj):
    #     return obj.comment_user_id.username
    
class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Junction_likes
        fields = ["total_likes", "likes_post", "likes_user"]

    def create(self, validated_data):
        user = validated_data['likes_user']
        post = validated_data['likes_post']
        existing_like = Junction_likes.objects.filter(likes_user=user, likes_post=post).first()     

        if existing_like: 
            existing_like.total_likes += 1
            existing_like.save(update_fields=['total_likes'])
            return existing_like
        else:
            like = Junction_likes.objects.create(**validated_data)               
            return like
        c

class PaginationSerializer(pagination.PageNumberPagination):

    page_size = 5
    max_page_size = 50

# Building: Post detail creator view ( path('posts/created-by/<pk>/', PostDetailCreatorView.as_view(), name="post_detail_creator"), ) # Endpoint to filter all posts created by certain user
