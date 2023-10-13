# Rest
from rest_framework.routers import DefaultRouter
# Apps Producto
from . import viewsets

router = DefaultRouter()

router.register(r'routine', viewsets.RoutineViewSets, basename="Routine")
router.register(r'comment-routine', viewsets.CommentsRoutineViewSets, basename="comment")
router.register(r'asignation', viewsets.RoutineAsignationViewSets, basename="asignation")
router.register(r'rating', viewsets.RoutineRatingViewSets, basename="rating")
router.register(r'workout', viewsets.WorkoutViewSets, basename='Workout')
router.register(r'performance-note-workout', viewsets.PerformanceNoteWorkoutViewSets, basename="performance")

urlpatterns = router.urls
