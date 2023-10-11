# Django
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# Model Utils
from model_utils.models import TimeStampedModel


class Routine(TimeStampedModel):
    """Class representing a Routine"""

    title = models.CharField(max_length=50)
    description = models.CharField(max_length=256)
    is_paid = models.BooleanField(default=False)
    # id_user =
    
    class Meta:
        verbose_name = 'Routine'
        verbose_name_plural = 'Routine'

    def __str__(self):
        return str(self.title)

class PerformanceNoteRoutine(TimeStampedModel):
    """Class representing a Performance Note Routine"""

    text = models.CharField(max_length=256)
    id_routine = models.ForeignKey(Routine,related_name="performance", on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Note Routine'
        verbose_name_plural = 'Note Routine'

    def __str__(self):
        return str(self.text)


class CommentsRoutine(TimeStampedModel):
    """Class representing a Comments Routine"""

    text = models.CharField(max_length=256)
    id_routine = models.ForeignKey(Routine, on_delete=models.CASCADE)
    # id_user =
    
    class Meta:
        verbose_name = 'Comment Routine'
        verbose_name_plural = 'Comments Routine'

    def __str__(self):
        return str(self.text)


class RoutineAsignation(models.Model):
    """Class representing a Routine Asignation"""

    # id_user =
    id_routine = models.ForeignKey(Routine, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Routine Asignation'
        verbose_name_plural = 'Routine Asignation'

    def __str__(self):
        return str(self.id_routine)


class RoutineRating(TimeStampedModel):
    """Class representing a Routine Rating"""

    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)])
    text = models.CharField(max_length=256)
    # id_user =
    id_routine = models.ForeignKey(Routine, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Routine Rating'
        verbose_name_plural = 'Routine Rating'

    def __str__(self):
        return str(self.rating)


class WeekDays(models.Model):
    """Class representing a Week Days"""

    day_name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Week Day'
        verbose_name_plural = 'Week Days'

    def __str__(self):
        return str(self.day_name)


class Workout(TimeStampedModel):
    """Class representing a Workout"""

    workout_name = models.CharField(max_length=50)
    description = models.CharField(max_length=256)
    reps = models.IntegerField(validators=[MinValueValidator(1)])
    series = models.IntegerField(validators=[MinValueValidator(1)])
    weight_kg = models.IntegerField(validators=[MinValueValidator(0)])
    rest_mins = models.IntegerField(validators=[MinValueValidator(0)])

    class Meta:
        verbose_name = 'Workout'
        verbose_name_plural = 'Workout'

    def __str__(self):
        return str(self.workout_name)


class Junction_DaysRoutineWorkout(models.Model):
    """Class representing a Junction Days Routine Workout"""

    id_day = models.ForeignKey(WeekDays, on_delete=models.CASCADE)
    id_routine = models.ForeignKey(Routine, on_delete=models.CASCADE)
    id_workout = models.ForeignKey(Workout, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Day'
        verbose_name_plural = 'Days'

    def __str__(self):
        return str(self.id_day)


class WorkoutImage(TimeStampedModel):
    """Class representing a Workout Image"""

    url_img = models.ImageField(upload_to='rutinas/img', blank=True, null=True)
    id_workout = models.ForeignKey(Workout, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Image'
        verbose_name_plural = 'Image'

    def __str__(self):
        return str(self.title)


class WorkoutVideo(TimeStampedModel):
    """Class representing a Workout Video"""

    url_video = models.FileField(
        upload_to='rutinas/videos', null=True, blank=True)
    id_workout = models.ForeignKey(Workout, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Video'
        verbose_name_plural = 'Video'

    def __str__(self):
        return str(self.url_video)
