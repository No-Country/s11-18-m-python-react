from rest_framework import serializers, pagination
from .models import Posts, CommentPost,Junction_likes,Junction_repost



class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Posts
        fields = ["content",'image_url','video_url','user','id','total_comments','total_likes','total_repost']
        read_only_fields = ['total_comments','total_likes','total_repost']
    
    def create(self, validated_data):             
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
    
    def update_comment_value(self, validated_data):
        post_id = validated_data['comment_post']
        existing_post = Posts.objects.filter(id = post_id).first()        

        if existing_post:
            existing_post.total_comments += 1
            existing_post.save(update_fields=['total_comments'])
            return existing_post

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Junction_likes
        fields = ["likes_post", "likes_user"]

    def create(self, validated_data):
            post_id = validated_data['likes_post']
            user = validated_data['likes_user']
            existing_like = Junction_likes.objects.filter(likes_post = post_id, likes_user = user).first()
            
            if existing_like:
                raise serializers.ValidationError('Already liked!')
            
            like = Junction_likes.objects.create(**validated_data)
            like.save()  
            return like

    def update_like_value(self, validated_data):
        post_id = validated_data['likes_post']
        existing_post = Posts.objects.filter(id = post_id).first()        

        if existing_post:
            existing_post.total_likes += 1
            existing_post.save(update_fields=['total_likes'])
            return existing_post   

class RepostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Junction_repost
        fields = ["repost_post", "repost_user"]

    def create(self, validated_data):
        post_id = validated_data['repost_post']
        user = validated_data['repost_user']
        existing_repost = Junction_repost.objects.filter(repost_post = post_id, repost_user = user).first()

        if existing_repost:
            raise serializers.ValidationError('Already reposted!')

        repost = Junction_repost.objects.create(**validated_data)
        repost.save()  
        return repost 

    def update_repost_value(self, validated_data):
        post_id = validated_data['repost_post']
        existing_post = Posts.objects.filter(id = post_id).first()    

        if existing_post:
            existing_post.total_repost += 1
            existing_post.save(update_fields=['total_repost'])
            return existing_post  

class PaginationSerializer(pagination.PageNumberPagination):

    page_size = 5
    max_page_size = 50

# Building: Post detail creator view ( path('posts/created-by/<pk>/', PostDetailCreatorView.as_view(), name="post_detail_creator"), ) # Endpoint to filter all posts created by certain user
