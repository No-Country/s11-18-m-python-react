# Rest Framework
from rest_framework import serializers, pagination
# Workout Plans Model
from .models import (
    Routine,
    CommentsRoutine,
    RoutineAsignation,
    RoutineRating,
    Workout,
    Set,
    WeekDay,
    PerformanceNoteWorkout,
    WorkoutImage,
    WorkoutVideo,
    Categories
    )


class PaginationSerializer(pagination.PageNumberPagination):
    """Class representing a Routine Pagination"""

    page_size = 5
    max_page_size = 50


class CommentsRoutineSerializers(serializers.ModelSerializer):
    """Class representing a  Comments Note Routine Serializers"""
    
    class Meta:
        model = CommentsRoutine
        fields = ("__all__")


class RoutineAsignationSerializers(serializers.ModelSerializer):
    """Class representing a Routine Asignation Serializers"""
    
    class Meta:
        model = RoutineAsignation
        fields = ("__all__")


class RoutineRatingSerializers(serializers.ModelSerializer):
    """Class representing a Routine Rating Serializers"""
    
    class Meta:
        model = RoutineRating
        fields = ("__all__")


class RoutineSerializersRetrive(serializers.ModelSerializer):
    """Class representing a Routine Serializers  Method retrive """
    
    comment = CommentsRoutineSerializers(many = True)
    asignation = RoutineAsignationSerializers(many = True)
    reating = RoutineRatingSerializers(many = True)
    # daysroutine = Junction_DaysRoutineWorkoutSerializers(many = True)
    count_comment = serializers.SerializerMethodField()
    count_asignation = serializers.SerializerMethodField()
    count_reating = serializers.SerializerMethodField()
    count_daysroutine = serializers.SerializerMethodField()
    average_reating = serializers.SerializerMethodField()

    class Meta:
        model = Routine
        fields = [
            "id",
            "created",
            "title",
            "description",
            "difficulty",
            "categorie",
            "price",
            "is_paid",
            "id_user",
            "count_comment",
            "count_asignation",
            "count_reating",
            "count_daysroutine",
            "average_reating",
            "comment",
            "asignation",
            "reating",
            # "daysroutine",
        ]
    def get_count_comment(self, obj):
        return obj.comment.all().count()
    def get_count_asignation(self, obj):
        return obj.asignation.all().count()
    def get_count_reating(self, obj):
        return obj.reating.all().count()
    # def get_count_daysroutine(self, obj):
    #     return obj.daysroutine.all().count()
    def get_average_reating(self, obj):
        ratings = obj.reating.all()
        rating_values = [] 
        for rating in ratings:
            rating_values.append(rating.rating)            
        if len(rating_values) != 0:
            average = sum(rating_values) // len(rating_values)
        else:
            average = 0
        return average



class RoutineSerializersList(serializers.ModelSerializer):
    """Class representing a Routine Serializers for Method list"""
    
    comment = serializers.SerializerMethodField()
    asignation = serializers.SerializerMethodField()
    reating = serializers.SerializerMethodField()
    # daysroutine = serializers.SerializerMethodField()
    difficulty = serializers.SerializerMethodField()
    
    class Meta:
        model = Routine
        fields = [
            "id",
            "created",
            "title",
            "description",
            "is_paid",
            "price",
            "categorie",
            "difficulty",
            "id_user",
            "comment",
            "asignation",
            "reating",
            # "daysroutine",   
        ]
    def get_difficulty(self, obj):
        return dict(Routine.DIFFICULTIES_CHOICES)[obj.difficulty]        
    def get_comment(self, obj):
        return obj.comment.all().count()
    def get_asignation(self, obj):
        return obj.asignation.all().count()
    def get_reating(self, obj):
        ratings = obj.reating.all()
        rating_values = [] 
        for rating in ratings:
            rating_values.append(rating.rating)            
        if len(rating_values) != 0:
            average = sum(rating_values) // len(rating_values)
        else:
            average = 0
        return average
    def get_daysroutine(self, obj):
        return obj.daysroutine.all().count()


class RoutineSerializers(serializers.ModelSerializer):
    """Class representing a Routine Serializers  Method create """

    class Meta:
        model = Routine
        fields = [
            "id",
            "created",
            "title",
            "description",
            "difficulty",
            "categorie",
            "is_paid",
            "price",
            "id_user",
            "is_user_premium",
        ]


class WorkoutSerializer(serializers.ModelSerializer):
    """Class representing a Workout Serializer. Method create """

    class Meta:
        model = Workout
        fields = ("__all__")


class PerformanceNoteWorkoutSerializers(serializers.ModelSerializer):
    """Class representing a  Performance Note Workout Serializers"""

    class Meta:
        model = PerformanceNoteWorkout
        fields = ("__all__")


class WorkoutImageSerializer(serializers.ModelSerializer):
    "Class representing a Workout image serializer"

    class Meta:
        model = WorkoutImage
        fields = ("__all__")


class WorkoutVideoSerializer(serializers.ModelSerializer):
    "Class representing a Workout image serializer"

    class Meta:
        model = WorkoutVideo
        fields = ("__all__")


class WorkoutSerializerList(serializers.ModelSerializer):
    "Class representig a Workout Serializer. Method list"
    
    class Meta:
        model = Workout
        fields = ("__all__")


class WorkoutSerializersRetrieve(serializers.ModelSerializer):
    """Class representing a Workout Serializer. Method retrive """

    comments = PerformanceNoteWorkoutSerializers(many=True)
    images = WorkoutImageSerializer(many=True)
    videos = WorkoutVideoSerializer(many=True)

    class Meta:
        model = Workout
        fields = [
            "id",
            "created",
            "comments",
            "images",
            "videos",
        ]


class SetSerializer(serializers.ModelSerializer):
    """Class representing a Set Serializer. Method create"""
    class Meta:
        model = Set
        fields = ("__all__")


class SetSerializerList(serializers.ModelSerializer):
    """Class representing a Set Serializer. Method list"""
    class Meta:
        model = Set
        fields = ("__all__")


class SetSerializerRetrieve(serializers.ModelSerializer):
    """Class representing a Set Serializer. Method retrieve"""
    workouts = WorkoutSerializerList(many=True)

    class Meta:
        model = Set
        fields = [
            "id",
            "set_name",
            "id_routine",
            "created",
            "workouts"
        ]


class WeekDaySerializer(serializers.ModelSerializer):
    """Class representing a Week Day serializer. Method create"""
    class Meta:
        model = WeekDay
        fields = ("__all__")


class CategoriesRoutineSerializers(serializers.ModelSerializer):
    """Class representing a  Comments Note Routine Serializers"""
    routineCategorie = RoutineSerializersList(many=True)
    
    class Meta:
        model = Categories
        fields = [
            "id",
            "name",
            "routineCategorie"
        ]