from django.db import models
from model_utils.models import TimeStampedModel
from apps.users.models import User



class Posts(TimeStampedModel):
    content = models.TextField(blank=True)
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name='user_posts')
    image_url = models.ImageField(upload_to='posts/img',blank= True, null= True)
    video_url = models.FileField(upload_to='posts/videos',blank= True, null= True)
    total_likes = models.PositiveIntegerField(default = 0)
    total_repost = models.PositiveIntegerField(default = 0)
    total_comments = models.PositiveIntegerField(default = 0)



class CommentPost(TimeStampedModel):
    comment_content = models.TextField()
    comment_post =  models.ForeignKey(Posts, on_delete=models.CASCADE)
    comment_user = models.ForeignKey(User, on_delete = models.CASCADE)    
    hide_comment = models.BooleanField(default=False)

    # def __str__(self):
    #     return f'Comment by {self.comment_user_id} on {self.comment_post_id}'


class Junction_likes(TimeStampedModel):
    likes_post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    likes_user = models.ForeignKey(User, on_delete = models.CASCADE)

class Junction_repost(TimeStampedModel):
    repost_post = models.ForeignKey(Posts, on_delete=models.CASCADE)    
    repost_user = models.ForeignKey(User, on_delete = models.CASCADE)
