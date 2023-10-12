from django.db import models
from model_utils.models import TimeStampedModel
from apps.users.models import User

class Posts(TimeStampedModel):
    content = models.CharField(max_length=256)
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
     
class ImagePost(TimeStampedModel):
    post_id =  models.ForeignKey(Posts, on_delete=models.CASCADE)
    image_url = models.FileField(upload_to='posts/img',blank= True, null= True)

class VideoPost(TimeStampedModel):
    post_id =  models.ForeignKey(Posts, on_delete=models.CASCADE)
    video_url = models.FileField(upload_to='posts/videos',blank= True, null= True)

class CommentPost(TimeStampedModel):
    content = models.CharField(max_length=256)
    post_id =  models.ForeignKey(Posts, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)

class Junction_likes(models.Model):
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    total_likes = models.PositiveIntegerField(default = 0)
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)

class Junction_repost(models.Model):
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    total_repost = models.PositiveIntegerField(default = 0)
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)