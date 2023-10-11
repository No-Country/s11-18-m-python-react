# Rest Framework
from rest_framework import serializers, pagination
# Workout Plans Model
from .models import (
    Routine,
    PerformanceNoteRoutine,
    CommentsRoutine,
    RoutineAsignation,
    RoutineRating
    )


class PaginationSerializer(pagination.PageNumberPagination):
    """Class representing a Routine Pagination"""

    page_size = 5
    max_page_size = 50


class RoutineSerializers(serializers.ModelSerializer):
    """Class representing a Routine Serializers"""
    
    class Meta:
        model = Routine
        fields = ("__all__")


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
