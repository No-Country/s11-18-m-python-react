from django.urls import path
from . import views

urlpatterns = [
    # Rating Coach
    # Endpoint para obtener calificaciones de un coach
    path('ratings/coach/<int:coach_id>/', views.get_ratings_for_coach, name='get_ratings_for_coach'),
    # Endpoint para crear una calificación
    path('ratings/create/', views.create_rating, name='create_rating'),
    # Endpoint para actualizar una calificación
    path('ratings/update/<int:rating_id>/', views.update_rating, name='update_rating'),
    # Endpoint para obtener el promedio de valoraciones de un coach
    path('ratings/average/coach/<int:coach_id>/', views.get_average_rating_for_coach, name='get_average_rating_for_coach'),

    #Verification Coach
    # Endpoint para crear una verificación de coach
    path('verifications/create/', views.create_verification, name='create_verification'),
    # Endpoint para listar las verificaciones de coach del usuario actual
    path('verifications/', views.list_verifications, name='list_verifications'),
    # Endpoint para obtener detalles de una verificación de coach específica
    path('verifications/<int:verification_id>/', views.get_verification, name='get_verification'),
    # Endpoint para actualizar una verificación de coach
    path('verifications/<int:verification_id>/update/', views.update_verification, name='update_verification'),
    # Endpoint para eliminar una verificación de coach
    path('verifications/<int:verification_id>/delete/', views.delete_verification, name='delete_verification'),

    #Gym Subscription
    # Endpoint para crear una suscripción a gimnasio
    path('subscriptions/create/', views.create_subscription, name='create_subscription'),
    # Endpoint para listar las suscripciones a gimnasios del usuario actual
    # path('subscriptions/', views.list_subscriptions, name='list_subscriptions'),
    # Endpoint para obtener detalles de una suscripción a gimnasio específica
    path('subscriptions/<int:subscription_id>/', views.get_subscription, name='get_subscription'),
    # Endpoint para actualizar una suscripción a gimnasio
    path('subscriptions/<int:subscription_id>/update/', views.update_subscription, name='update_subscription'),
    # Endpoint para eliminar una suscripción a gimnasio
    path('subscriptions/<int:subscription_id>/delete/', views.delete_subscription, name='delete_subscription'),
]