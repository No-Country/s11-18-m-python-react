from django.db import models
from model_utils.models import TimeStampedModel
from apps.users.models import User

class Posts(TimeStampedModel):
    content = models.CharField(max_length=256,blank=True)
    user_id = models.ForeignKey(User, on_delete = models.CASCADE, null=True)
    image_url = models.ImageField(upload_to='posts/img',blank= True, null= True)
    video_url = models.FileField(upload_to='posts/videos',blank= True, null= True)

class CommentPost(TimeStampedModel):
    comment_post_id = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name="comments")
    comment_user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_content = models.CharField(max_length=256, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    #post_id_comment =  models.ForeignKey(Posts, related_name="comment", on_delete=models.CASCADE)
    #user_id_comment = models.ForeignKey(User, on_delete = models.CASCADE,null=True)

    class Meta:
        ordering = ('created_at',)

    def __str__(self):
        return f'Comment by {self.comment_user_id} on {self.comment_post_id}'

class Junction_likes(models.Model):
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    total_likes = models.PositiveIntegerField(default = 0)
    user_id = models.ForeignKey(User, on_delete = models.CASCADE,null=True)

class Junction_repost(models.Model):
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    total_repost = models.PositiveIntegerField(default = 0)
    user_id = models.ForeignKey(User, on_delete = models.CASCADE,null=True)