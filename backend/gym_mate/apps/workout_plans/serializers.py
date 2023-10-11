# Rest Framework
from rest_framework import serializers, pagination
# Workout Plans Model
from .models import (
    Routine,
    PerformanceNoteRoutine,
    CommentsRoutine,
    RoutineAsignation,
    RoutineRating,
    Junction_DaysRoutineWorkout
    )


class PaginationSerializer(pagination.PageNumberPagination):
    """Class representing a Routine Pagination"""

    page_size = 5
    max_page_size = 50


class PerformanceNoteRoutineSerializers(serializers.ModelSerializer):
    """Class representing a  Performance Note Routine Serializers"""
    
    class Meta:
        model = PerformanceNoteRoutine
        fields = ("__all__")


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
        

class Junction_DaysRoutineWorkoutSerializers(serializers.ModelSerializer):
    """Class representing a Routine Rating Serializers"""
    
    class Meta:
        model = Junction_DaysRoutineWorkout
        fields = ("__all__")


class RoutineSerializersRetrive(serializers.ModelSerializer):
    """Class representing a Routine Serializers  Method retrive """
    
    comment = CommentsRoutineSerializers(many = True)
    asignation = RoutineAsignationSerializers(many = True)
    reating = RoutineRatingSerializers(many = True)
    daysroutine = Junction_DaysRoutineWorkoutSerializers(many = True)
    count_comment = serializers.SerializerMethodField()
    count_asignation = serializers.SerializerMethodField()
    count_reating = serializers.SerializerMethodField()
    count_daysroutine = serializers.SerializerMethodField()

    class Meta:
        model = Routine
        fields = [
            "id",
            "created",
            "title",
            "description",
            "is_paid",
            "count_comment",
            "count_asignation",
            "count_reating",
            "count_daysroutine",
            "comment",
            "asignation",
            "reating",
            "daysroutine",
        ]
    def get_count_comment(self, obj):
        return obj.comment.all().count()
    def get_count_asignation(self, obj):
        return obj.asignation.all().count()
    def get_count_reating(self, obj):
        return obj.reating.all().count()
    def get_count_daysroutine(self, obj):
        return obj.daysroutine.all().count()



class RoutineSerializersList(serializers.ModelSerializer):
    """Class representing a Routine Serializers for Method list"""
    
    comment = serializers.SerializerMethodField()
    asignation = serializers.SerializerMethodField()
    reating = serializers.SerializerMethodField()
    daysroutine = serializers.SerializerMethodField()
    
    class Meta:
        model = Routine
        fields = [
            "id",
            "created",
            "title",
            "description",
            "is_paid",
            "comment",
            "asignation",
            "reating",
            "daysroutine"
        ]
    def get_comment(self, obj):
        return obj.comment.all().count()
    def get_asignation(self, obj):
        return obj.asignation.all().count()
    def get_reating(self, obj):
        return obj.reating.all().count()
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
            "is_paid",

        ]