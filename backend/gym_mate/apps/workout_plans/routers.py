# Rest
from rest_framework.routers import DefaultRouter
# Django
from django.urls import path, include
# Viewsets
from . import viewsets
# Views
from . import views

router = DefaultRouter()

router.register(r'routine', viewsets.RoutineViewSets, basename="Routine")
router.register(r'favorite', viewsets.RoutineFavoriteViewSets, basename="Favorite")
router.register(r'category', viewsets.CategoriesRoutineViewSets, basename="Category")
router.register(r'comment-routine', viewsets.CommentsRoutineViewSets, basename="comment")
router.register(r'asignation', viewsets.RoutineAsignationViewSets, basename="asignation")
router.register(r'rating', viewsets.RoutineRatingViewSets, basename="rating")
router.register(r'workout', viewsets.WorkoutViewSets, basename='Workout')
router.register(r'set', viewsets.SetViewSets, basename='Set')
router.register(r'performance-note-workout', viewsets.PerformanceNoteWorkoutViewSets, basename="performance")


urlpatterns = router.urls

urlpatterns += [
    # Filter  Free Paid Premium ?tipo=pagas ?tipo=pagas - ?tipo=premium - ?tipo=free   (If no parameter is sent, it returns all routines)
    path('filter/routine/free-paid-premium/',views.TypeOfRoutineListAPIView.as_view(), name="routine-filter-free-paid-premium" ),
    # Filter categorie  difficulty ?categoria= & dificultad= - ?categoria= - ?dificultad= (If no parameter is sent, it returns all routines)
    path('filter/routine/',views.FilterRoutinesByCategoriesListAPIView.as_view(), name="routine-filter" ),
    # Filter the coach routines
    path('filter/routine/coach/',views.FilterRoutinesByCoachListAPIView.as_view(), name="routine-filter" ),
]