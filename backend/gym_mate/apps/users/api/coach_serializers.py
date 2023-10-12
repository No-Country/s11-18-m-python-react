from rest_framework import serializers
from apps.coach_users.models import (
    Rating_Coach,
    Verification_Coach,
    Gym_Subscription,
    Coaching
)


class RatingCoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating_Coach
        fields = ("__all__")


class VerificationCoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Verification_Coach
        fields = ("__all__")


class GymSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym_Subscription
        fields = ("__all__")


class CoachingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coaching
        fields = ("__all__")
