from django.contrib import admin
from .models import *

models_to_register = [
    Posts,
    ImagePost,
    VideoPost,
    CommentPost,
    Junction_likes,
    Junction_repost
]

admin.site.register(models_to_register)
