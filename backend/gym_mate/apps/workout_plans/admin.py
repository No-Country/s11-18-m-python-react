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
    WeekDays,
    Workout,
    Junction_DaysRoutineWorkout,
    WorkoutImage,
    WorkoutVideo
]

admin.site.register(models_to_register)
