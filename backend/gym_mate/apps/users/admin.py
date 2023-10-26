# Django
from django.contrib import admin
# Models

from .models import User, Followers 

admin.site.register(User)
admin.site.register(Followers)
