# Django
from django.contrib import admin
# Models
from .models import *

models_to_register = [
    Routine,
    PerformanceNoteWorkout,
    CommentsRoutine,
    RoutineAsignation,
    RoutineRating,
    WeekDay,
    Set,
    Workout,
    WorkoutImage,
    WorkoutVideo,
    Categories,
    RoutineFavorite
]

admin.site.register(models_to_register)
