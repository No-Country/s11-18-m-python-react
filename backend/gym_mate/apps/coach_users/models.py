from django.db import models
from apps.users.models import User
from django.conf import settings




#Coach models

class Rating_Coach(models.Model):
    rating = models.IntegerField()
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='ratings_given')
    rated_coach = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='ratings_received')

class Verification_Coach(models.Model):
    degree = models.CharField(max_length=50)
    academic_institution = models.CharField()
    url_certificate = models.CharField()

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class Gym_Subscription(models.Model):
    name_gym = models.CharField(max_length=50)
    start_subscription = models.DateField()
    end_subscription = models.DateField()

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class Coaching(models.Model):
    type_coaching = models.CharField(max_length=50)


class Junction_User_Coach(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    coaching = models.ForeignKey(Coaching, on_delete=models.CASCADE)
