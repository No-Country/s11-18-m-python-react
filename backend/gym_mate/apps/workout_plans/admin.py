# Django
from django.contrib import admin
# Models
from .models import *

models_to_register = [
    Routine,
    PerformanceNoteRoutine,
    CommentsRoutine,
    RoutineAsignation,
    RoutineRating,
    WeekDays,
    Workout,
    Junction_DaysRoutineWorkout,
    WorkoutImage,
    WorkoutVideo
]

admin.site.register(models_to_register)
