from django.db import models
from model_utils.models import TimeStampedModel
from apps.users.models import User



class Posts(TimeStampedModel):
    content = models.CharField(max_length=256,blank=True)
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name='user_posts')
    image_url = models.ImageField(upload_to='posts/img',blank= True, null= True)
    video_url = models.FileField(upload_to='posts/videos',blank= True, null= True)

class CommentPost(TimeStampedModel):
    comment_content = models.CharField(max_length=256)
    comment_post =  models.ForeignKey(Posts, on_delete=models.CASCADE)
    comment_user = models.ForeignKey(User, on_delete = models.CASCADE)
    comment_total_comments = models.PositiveIntegerField(default = 0)
    # def __str__(self):
    #     return f'Comment by {self.comment_user_id} on {self.comment_post_id}'


class Junction_likes(TimeStampedModel):
    likes_post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    total_likes = models.PositiveIntegerField(default = 1)
    likes_user = models.ForeignKey(User, on_delete = models.CASCADE)

class Junction_repost(TimeStampedModel):
    repost_post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    total_repost = models.PositiveIntegerField(default = 1)
    repost_user = models.ForeignKey(User, on_delete = models.CASCADE)