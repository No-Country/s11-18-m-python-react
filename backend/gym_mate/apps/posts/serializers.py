from rest_framework import serializers, pagination
from .models import Posts, CommentPost,Junction_likes,Junction_repost



class PostSerializer(serializers.ModelSerializer):

    comments = serializers.SerializerMethodField()

    class Meta:        
        model = Posts
        fields = ["content",'image_url','video_url','user','id','total_comments','total_likes','total_repost','comments']
        read_only_fields = ['total_comments','total_likes','total_repost']
    
    def get_comments(self, obj):
        comments_queryset = CommentPost.objects.filter(comment_post=obj.id)
        all_comments_from_post = []
        for comment in comments_queryset:
            data = {
                'Comment Content': comment.comment_content,
                'Made by': comment.comment_user.username,
            }
            all_comments_from_post.append(data)
        return all_comments_from_post
        
    def create(self, validated_data):             
        post = Posts.objects.create(**validated_data)
        post.save()
        return post         


class CommmentPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentPost        
        fields = ["id","comment_content", "comment_post", "comment_user","hide_comment"]

    def create(self, validated_data):
        comment = CommentPost.objects.create(**validated_data)
        comment.save()               
        return comment
    
    def update_comment_total_value(self, validated_data):
        post_id = validated_data['comment_post']
        existing_post = Posts.objects.filter(id = post_id).first()        

        if existing_post:
            existing_post.total_comments += 1
            existing_post.save(update_fields=['total_comments'])
            return existing_post

    def hide_comment(self, validated_data):
        post_id = validated_data['comment_post']
        user = validated_data['comment_user']
        comment_id = validated_data['id'] 
        existing_post = Posts.objects.filter(id = post_id).first()  
        existing_comment = CommentPost.objects.filter(comment_post = post_id, comment_user = user, id = comment_id).first()

        if existing_post: 
            if existing_comment.hide_comment == False:
                existing_comment.hide_comment = True
                existing_comment.save(update_fields=['hide_comment'])
                return 'hidden'
            else:
                existing_comment.hide_comment = False
                existing_comment.save(update_fields=['hide_comment'])
                return 'visible'              

    def delete_comment(self, validated_data):
        post_id = validated_data['comment_post']
        existing_post = Posts.objects.filter(id = post_id).first()   
    
        if existing_post:
            existing_post.total_comments -= 1
            existing_post.save(update_fields=['total_comments'])
            return existing_post

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Junction_likes
        fields = ["likes_post", "likes_user"]

    def create(self, validated_data):
            post_id = validated_data['likes_post'].id
            user = validated_data['likes_user']
            existing_like = Junction_likes.objects.filter(likes_post = post_id, likes_user = user).first()
            existing_post = Posts.objects.filter(id = post_id).first()
            
            if existing_like and existing_post:
                existing_post.total_likes -= 1
                existing_post.save(update_fields=['total_likes'])

                existing_like.delete()
                return 'removed'   
            else: 
                like = Junction_likes.objects.create(**validated_data)
                like.save()  
                existing_post = Posts.objects.filter(id = post_id).first()

                if existing_post:
                    existing_post.total_likes += 1
                    existing_post.save(update_fields=['total_likes'])

            return existing_post.id

    # def update_like_value(self, validated_data):
    #     post_id = validated_data['likes_post']
    #     existing_post = Posts.objects.filter(id = post_id).first()
        
    #     if existing_post:
    #         existing_post.total_likes += 1
    #         existing_post.save(update_fields=['total_likes'])
    #         return existing_post   

class RepostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Junction_repost
        fields = ["repost_post", "repost_user"]

    def create(self, validated_data):
        post_id = validated_data['repost_post'].id
        user = validated_data['repost_user']        
        existing_repost = Junction_repost.objects.filter(repost_post = post_id, repost_user = user).first()
        existing_post = Posts.objects.filter(id = post_id).first()

        if existing_repost and existing_post:
            existing_post.total_repost -= 1
            existing_post.save(update_fields=['total_repost'])

            existing_repost.delete()
            return 'removed'           
        else:
            repost = Junction_repost.objects.create(**validated_data)
            repost.save()
            existing_post = Posts.objects.filter(id = post_id).first()

            if existing_post:
                existing_post.total_repost += 1
                existing_post.save(update_fields=['total_repost'])

        return existing_post.id

   # def update_repost_value(self, validated_data):
    #     post_id = validated_data['repost_post']
    #     existing_post = Posts.objects.filter(id = post_id).first()    

    #     if existing_post:
    #         existing_post.total_repost += 1
    #         existing_post.save(update_fields=['total_repost'])
    #         return existing_post  

class PaginationSerializer(pagination.PageNumberPagination):

    page_size = 5
    max_page_size = 50

# Building: Post detail creator view ( path('posts/created-by/<pk>/', PostDetailCreatorView.as_view(), name="post_detail_creator"), ) # Endpoint to filter all posts created by certain user
