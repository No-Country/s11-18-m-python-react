# Django
from django.contrib import admin
# Models
from .models import User

from .models import User, Followers 

#class UserRegister(admin.ModelAdmin):
#    form = ('id', 'username')

admin.site.register(User)
admin.site.register(Followers)
