# Rest
from rest_framework import viewsets
from rest_framework.response import Response
# Apps Products
from .models import (
    Routine,
    PerformanceNoteRoutine,
    CommentsRoutine,
    RoutineAsignation,
    RoutineRating
)
from .serializers import (
    RoutineSerializers,
    PaginationSerializer,
    PerformanceNoteRoutineSerializers,
    CommentsRoutineSerializers,
    RoutineAsignationSerializers,
    RoutineRatingSerializers
)


class RoutineViewSets(viewsets.ModelViewSet):
    """Class representing a Routine ViewSets"""
    
    serializer_class = RoutineSerializers
    pagination_class = PaginationSerializer
    queryset = Routine.objects.all().order_by('-created')
    

class PerformanceNoteRoutineViewSets(viewsets.ModelViewSet):
    """Class representing a Performance Note Routine ViewSets"""

    serializer_class = PerformanceNoteRoutineSerializers
    pagination_class = PaginationSerializer
    queryset = PerformanceNoteRoutine.objects.all().order_by('-created')


class CommentsRoutineViewSets(viewsets.ModelViewSet):
    """Class representing a Comments Routine ViewSets"""

    serializer_class = CommentsRoutineSerializers
    pagination_class = PaginationSerializer
    queryset = CommentsRoutine.objects.all().order_by('-created')


class RoutineAsignationViewSets(viewsets.ModelViewSet):
    """Class representing a  Routine Asignation ViewSets"""

    serializer_class = RoutineAsignationSerializers
    pagination_class = PaginationSerializer
    queryset = RoutineAsignation.objects.all()


class RoutineRatingViewSets(viewsets.ModelViewSet):
    """Class representing a  Routine Ratings ViewSets"""

    serializer_class = RoutineRatingSerializers
    pagination_class = PaginationSerializer
    queryset = RoutineRating.objects.all().order_by('-created')
