from django.contrib import admin
from .models import Rating_Coach, Verification_Coach, Coaching, Gym_Subscription

models_to_register = [
    Rating_Coach,
    Verification_Coach,
    Coaching,
    Gym_Subscription
]

admin.site.register(models_to_register)

