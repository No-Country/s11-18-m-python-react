from django.shortcuts import get_object_or_404
from django.db.models import Avg
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from apps.coach_users.models import Rating_Coach, Verification_Coach, Gym_Subscription
#from apps.users.models import User
from .serializers import RatingCoachSerializer, VerificationCoachSerializer, GymSubscriptionSerializer


#Rating Coach

@api_view(['GET'])
def get_ratings_for_coach(request, coach_id):
    """
    Obtiene todas las calificaciones (ratings) para un coach específico.
    """
    ratings = Rating_Coach.objects.filter(rated_coach=coach_id)
    serializer = RatingCoachSerializer(ratings, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_rating(request):
    """
    Crea una nueva calificación (rating) y la asigna a un coach.
    """
    serializer = RatingCoachSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
def update_rating(request, rating_id):
    """
    Actualiza una calificación existente.
    """
    rating = get_object_or_404(Rating_Coach, id=rating_id)
    serializer = RatingCoachSerializer(instance=rating, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_average_rating_for_coach(request, coach_id):
    """
    Obtiene el promedio de las valoraciones para un coach específico.
    """
    average_rating = Rating_Coach.objects.filter(rated_coach=coach_id).aggregate(avg_rating=Avg('rating'))
    return Response({'average_rating': average_rating['avg_rating']})


# Verification Coach

@api_view(['POST'])
def create_verification(request):
    """
    Crea una nueva verificación de coach.
    """
    serializer = VerificationCoachSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)  # Asigna el usuario actual como el propietario de la verificación
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def list_verifications(request):
    """
    Obtiene una lista de todas las verificaciones de coach para el usuario actual.
    """
    verifications = Verification_Coach.objects.filter(user=request.user)
    serializer = VerificationCoachSerializer(verifications, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_verification(request, verification_id):
    """
    Obtiene detalles de una verificación de coach específica.
    """
    verification = get_object_or_404(Verification_Coach, id=verification_id, user=request.user)
    serializer = VerificationCoachSerializer(verification)
    return Response(serializer.data)


@api_view(['PATCH'])
def update_verification(request, verification_id):
    """
    Actualiza una verificación de coach existente.
    """
    verification = get_object_or_404(Verification_Coach, id=verification_id, user=request.user)
    serializer = VerificationCoachSerializer(instance=verification, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_verification(request, verification_id):
    """
    Elimina una verificación de coach.
    """
    verification = get_object_or_404(Verification_Coach, id=verification_id, user=request.user)
    verification.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


# Gym Subscription

@api_view(['POST'])
def create_subscription(request):
    """
    Crea una nueva suscripción a un gimnasio.
    """
    serializer = GymSubscriptionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)  # Asigna el usuario actual como propietario de la suscripción
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#@api_view(['GET'])
#def list_subscriptions(request):
#    """
#    Obtiene una lista de todas las suscripciones a gimnasios del usuario actual.
#    """
#    subscriptions = Gym_Subscription.objects.filter(user=request.user)
#    serializer = GymSubscriptionSerializer(subscriptions, many=True)
#    return Response(serializer.data)


@api_view(['GET'])
def get_subscription(request, subscription_id):
    """
    Obtiene detalles de una suscripción a gimnasio específica.
    """
    subscription = get_object_or_404(Gym_Subscription, id=subscription_id, user=request.user)
    serializer = GymSubscriptionSerializer(subscription)
    return Response(serializer.data)


@api_view(['PATCH'])
def update_subscription(request, subscription_id):
    """
    Actualiza una suscripción a gimnasio existente.
    """
    subscription = get_object_or_404(Gym_Subscription, id=subscription_id, user=request.user)
    serializer = GymSubscriptionSerializer(instance=subscription, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_subscription(request, subscription_id):
    """
    Elimina una suscripción a gimnasio.
    """
    subscription = get_object_or_404(Gym_Subscription, id=subscription_id, user=request.user)
    subscription.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
