from django.shortcuts import get_object_or_404
from django.db.models import Avg
from rest_framework import status
from apps.users.authenticate import CustomTokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from apps.coach_users.models import Rating_Coach, Verification_Coach, Gym_Subscription
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
@authentication_classes([CustomTokenAuthentication])
@permission_classes([IsAuthenticated])
def create_rating(request, coach_id):
    """
    Crea una nueva calificación (rating) y la asigna a un coach en función de la URL.
    """
    # Configura el campo 'rated_coach' con el ID del coach obtenido de la URL
    request.data['rated_coach'] = coach_id
    # Configura el campo 'user' con el usuario autenticado
    request.data['user'] = request.user.id

    serializer = RatingCoachSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
@authentication_classes([CustomTokenAuthentication])
@permission_classes([IsAuthenticated])
def update_rating(request, coach_id):
    """
    Actualiza una calificación existente para el coach específico.
    """
    # Obtén el ID del usuario logueado
    user_id = request.user.id

    # Busca la calificación basada en el usuario logueado y el coach
    rating = Rating_Coach.objects.filter(rated_coach=coach_id, user=user_id).first()

    if not rating:
        return Response({'detail': 'No tiene permiso para actualizar esta calificación.'}, status=status.HTTP_403_FORBIDDEN)

    serializer = RatingCoachSerializer(instance=rating, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#@api_view(['GET'])
#def get_average_rating_for_coach(request, coach_id):
#    """
#    Obtiene el promedio de las valoraciones para un coach específico.
#    """
#    average_rating = Rating_Coach.objects.filter(rated_coach=coach_id).aggregate(avg_rating=Avg('rating'))
#    return Response({'average_rating': average_rating['avg_rating']})


# Verification Coach

@api_view(['POST'])
@authentication_classes([CustomTokenAuthentication])
@permission_classes([IsAuthenticated])
def create_verification(request):
    """
    Crea una nueva verificación de coach.
    """
    request.data['user'] = request.user.id
    serializer = VerificationCoachSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)  # Asigna el usuario actual como el propietario de la verificación
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def list_verifications(request, coach_id):
    """
    Obtiene una lista de verificaciones de coach para un coach específico.
    """
    verifications = Verification_Coach.objects.filter(user_id=coach_id)
    serializer = VerificationCoachSerializer(verifications, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_verification(request, verification_id):
    """
    Obtiene detalles de una verificación de coach específica.
    """
    verification = get_object_or_404(Verification_Coach, id=verification_id)
    serializer = VerificationCoachSerializer(verification)
    return Response(serializer.data)


@api_view(['PATCH'])
@authentication_classes([CustomTokenAuthentication])
@permission_classes([IsAuthenticated])
def update_verification(request, verification_id):
    """
    Actualiza una verificación de coach existente.
    """
    # Verifica si el usuario autenticado es el propietario de la verificación
    verification = get_object_or_404(Verification_Coach, id=verification_id)
    if request.user.id != verification.user_id:
        return Response({'detail': 'No tiene permiso para actualizar esta verificación.'}, status=status.HTTP_403_FORBIDDEN)

    serializer = VerificationCoachSerializer(instance=verification, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@authentication_classes([CustomTokenAuthentication])
@permission_classes([IsAuthenticated])
def delete_verification(request, verification_id):
    """
    Elimina una verificación de coach.
    """
    try:
        verification = Verification_Coach.objects.get(id=verification_id, user=request.user)
        verification.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Verification_Coach.DoesNotExist:
        return Response({'detail': 'No se encontró la verificación o no tiene permiso para eliminarla.'}, status=status.HTTP_404_NOT_FOUND)


# Gym Subscription

@api_view(['POST'])
@authentication_classes([CustomTokenAuthentication])
@permission_classes([IsAuthenticated])
def create_subscription(request):
    """
    Crea una nueva suscripción a un gimnasio.
    """
    serializer = GymSubscriptionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([CustomTokenAuthentication])
@permission_classes([IsAuthenticated])
def get_user_subscription(request):
    """
    Obtiene detalles de la suscripción al gimnasio del usuario logueado.
    """
    try:
        subscription = Gym_Subscription.objects.get(user=request.user)
        serializer = GymSubscriptionSerializer(subscription)
        return Response(serializer.data)
    except Gym_Subscription.DoesNotExist:
        return Response({'detail': 'No se encontró la suscripción o no tiene permiso para acceder a esta suscripción.'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['PATCH'])
@authentication_classes([CustomTokenAuthentication])
@permission_classes([IsAuthenticated])
def update_user_subscription(request):
    """
    Actualiza la suscripción al gimnasio del usuario logueado.
    """
    try:
        subscription = Gym_Subscription.objects.get(user=request.user)
        serializer = GymSubscriptionSerializer(instance=subscription, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Gym_Subscription.DoesNotExist:
        return Response({'detail': 'No se encontró la suscripción o no tiene permiso para modificarla.'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['DELETE'])
@authentication_classes([CustomTokenAuthentication])
@permission_classes([IsAuthenticated])
def delete_user_subscription(request):
    """
    Elimina la suscripción al gimnasio del usuario logueado.
    """
    try:
        subscription = Gym_Subscription.objects.get(user=request.user)
        subscription.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Gym_Subscription.DoesNotExist:
        return Response({'detail': 'No se encontró la suscripción o no tiene permiso para eliminarla.'}, status=status.HTTP_404_NOT_FOUND)
