from django.db import models
from .models import User


class Rating_Coach(models.Model):
    rating = models.IntegerField()
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(User)
    rated_coach = models.ForeignKey(User)


class Verification_Coach(models.Model):
    degree = models.CharField()
    academic_institution = models.CharField()
    url_certificate = models.CharField()

    user = models.ForeignKey(User)


class Gym_Subscription(models.Model):
    name_gym = models.CharField()
    start_subscription = models.DateField()
    end_subscription = models.DateField()

    user = models.ForeignKey(User)


class Coaching(models.Model):
    type_coaching = models.CharField()


class Junction_User_Coach(models.Model):
    user = models.ForeignKey(User)
    coaching = models.ForeignKey(Coaching)
