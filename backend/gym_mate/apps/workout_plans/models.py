# Django
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.conf import settings
# Model Utils
from model_utils.models import TimeStampedModel
# Managers
from .managers import RoutineManager


class Categories(models.Model):
    
    name = models.CharField('Name', max_length=50)
    
    class Meta:
        verbose_name = 'Categorie'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return  str(self.name) 

    
class Routine(TimeStampedModel):
    """Class representing a Routine"""

    # Difficulties
    DIFFICULT = 'D'
    MEDIUIM = 'I'
    EASY = 'F'

    DIFFICULTIES_CHOICES = [
        (DIFFICULT, 'Dificil'),
        (MEDIUIM, 'Intermedio'),
        (EASY, 'Facil'),
    ]

    title = models.CharField(max_length=50)
    description = models.CharField(max_length=256)
    difficulty = models.CharField(
        max_length=1, 
        choices=DIFFICULTIES_CHOICES, 
    )
    categorie = models.ManyToManyField(
        Categories , 
        related_name="routineCategorie", 
    )
    is_paid = models.BooleanField(default=False)
    price = models.DecimalField(
        'Precio', 
        max_digits=5, 
        decimal_places=2, 
        blank= True,
        null= True
    ) 
    is_user_premium = models.BooleanField(default=False)
    id_user = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        related_name="user", 
        on_delete=models.CASCADE
    )
    
    objects = RoutineManager()
    
    class Meta:
        verbose_name = 'Routine'
        verbose_name_plural = 'Routine'

    def __str__(self):
        return  str(self.id) + ' - ' + str(self.title)  + ' - ' + str(self.id_user)


class CommentsRoutine(TimeStampedModel):
    """Class representing a Comments Routine"""

    text = models.CharField(max_length=256)
    id_routine = models.ForeignKey(Routine, related_name="comment", on_delete=models.CASCADE)
    id_user = models.ForeignKey( settings.AUTH_USER_MODEL, related_name="userComment", on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Comment Routine'
        verbose_name_plural = 'Comments Routine'

    def __str__(self):
        return str(self.text)


class RoutineAsignation(models.Model):
    """Class representing a Routine Asignation"""

    id_user = models.ForeignKey( settings.AUTH_USER_MODEL, related_name="userAsignation", on_delete=models.CASCADE)
    id_routine = models.ForeignKey(Routine, related_name="asignation", on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Routine Asignation'
        verbose_name_plural = 'Routine Asignation'

    def __str__(self):
        return str(self.id_routine)


class RoutineRating(TimeStampedModel):
    """Class representing a Routine Rating"""

    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    text = models.CharField(max_length=256)
    id_user = models.ForeignKey( settings.AUTH_USER_MODEL, related_name="userReating", on_delete=models.CASCADE)
    id_routine = models.ForeignKey(Routine, related_name="reating", on_delete=models.CASCADE)

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


class PerformanceNoteWorkout(TimeStampedModel):
    """Class representing a Performance Note Workout"""

    text = models.CharField(max_length=256)
    id_workout = models.ForeignKey(Workout, related_name="performance", on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Note Workout'
        verbose_name_plural = 'Note Workout'

    def __str__(self):
        return str(self.text)


class Junction_DaysRoutineWorkout(models.Model):
    """Class representing a Junction Days Routine Workout"""

    id_day = models.ForeignKey(WeekDays,related_name="days", on_delete=models.CASCADE)
    id_routine = models.ForeignKey(Routine,related_name="daysroutine", on_delete=models.CASCADE)
    id_workout = models.ForeignKey(Workout, related_name="workout", on_delete=models.CASCADE)

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
