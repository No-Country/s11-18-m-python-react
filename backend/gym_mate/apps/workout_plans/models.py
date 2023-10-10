from django.db import models
from model_utils.models import TimeStampedModel
from django.core.validators import MaxValueValidator, MinValueValidator


class Routine(TimeStampedModel):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=256)
    is_paid = models.BooleanField(default=False)
    # id_user = 


class PerformanceNoteRoutine(TimeStampedModel):
    text = models.CharField(max_length=256)
    id_routine = models.ForeignKey(Routine, on_delete=models.CASCADE)


class CommentsRoutine(TimeStampedModel):
    text = models.CharField(max_length=256)
    id_routine = models.ForeignKey(Routine, on_delete=models.CASCADE)
    # id_user = 


class RoutineAsignation(models.Model):
    # id_user = 
    id_routine = models.ForeignKey(Routine, on_delete=models.CASCADE)


class RoutineRating(TimeStampedModel):
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    text = models.CharField(max_length=256)
    # id_user = 
    id_routine = models.ForeignKey(Routine, on_delete=models.CASCADE)


class WeekDays(models.Model):
    day_name = models.CharField(max_length=50)


class Workout(TimeStampedModel):
    workout_name = models.CharField(max_length=50)
    description = models.CharField(max_length=256)
    reps = models.IntegerField(validators=[MinValueValidator(1)])
    series = models.IntegerField(validators=[MinValueValidator(1)])
    weight_kg = models.IntegerField(validators=[MinValueValidator(0)])
    rest_mins = models.IntegerField(validators=[MinValueValidator(0)])


class Junction_DaysRoutineWorkout(models.Model):
    id_day = models.ForeignKey(WeekDays, on_delete=models.CASCADE)
    id_routine = models.ForeignKey(Routine, on_delete=models.CASCADE)
    id_workout = models.ForeignKey(Workout, on_delete=models.CASCADE)


class WorkoutImage(TimeStampedModel):
    url_img = models.ImageField(upload_to='rutinas/img',blank= True, null= True)
    id_workout = models.ForeignKey(Workout, on_delete=models.CASCADE)


class WorkoutVideo(TimeStampedModel):
    url_video = models.FileField(upload_to='rutinas/videos', null=True, blank=True )
    id_workout = models.ForeignKey(Workout, on_delete=models.CASCADE)
