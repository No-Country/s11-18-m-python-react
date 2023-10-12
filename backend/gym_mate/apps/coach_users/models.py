from django.db import models
from apps.users.models import User


#Coach models

class Rating_Coach(models.Model):
    rating = models.IntegerField()
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ratings_given')
    rated_coach = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ratings_received')


class Verification_Coach(models.Model):
    degree = models.CharField()
    academic_institution = models.CharField()
    url_certificate = models.CharField()

    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Gym_Subscription(models.Model):
    name_gym = models.CharField()
    start_subscription = models.DateField()
    end_subscription = models.DateField()

    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Coaching(models.Model):
    type_coaching = models.CharField()


class Junction_User_Coach(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    coaching = models.ForeignKey(Coaching, on_delete=models.CASCADE)
