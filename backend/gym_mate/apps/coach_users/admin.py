# Django
from django.contrib import admin
# Models
from .models import *



models_to_register = [
    Rating_Coach,
    Verification_Coach,
    Gym_Subscription,
    Coaching,

]

admin.site.register(models_to_register)