# Rest
from rest_framework import viewsets
from rest_framework.response import Response
# Apps Products
from .models import (
    Routine,
    PerformanceNoteRoutine,
    CommentsRoutine,
    RoutineAsignation,
    RoutineRating,
    Workout
)
from .serializers import (
    RoutineSerializers,
    PaginationSerializer,
    PerformanceNoteRoutineSerializers,
    CommentsRoutineSerializers,
    RoutineAsignationSerializers,
    RoutineRatingSerializers,
    RoutineSerializersList,
    RoutineSerializersRetrive,
    WorkoutSerializer,
    WorkoutSerializersRetrieve,
    WorkoutSerializerList
)


class RoutineViewSets(viewsets.ModelViewSet):
    """Class representing a Routine ViewSets"""
    
    serializer_class = RoutineSerializers
    pagination_class = PaginationSerializer
    queryset = Routine.objects.all().order_by('-created')
    
    
    def list(self, request, *args, **kwargs):
        queryset = Routine.objects.all().order_by('-created')

        serializer = RoutineSerializersList(queryset, many=True)
        return Response(serializer.data)
    
    
    def create(self, request, *args, **kwargs):
        serializer = RoutineSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, headers=headers)
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = RoutineSerializersRetrive(instance)
        return Response(serializer.data)
    
    
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


class WorkoutViewSets(viewsets.ModelViewSet):
    """Class representing a Workout ViewSet"""

    serializer_class = WorkoutSerializer
    pagination_class = PaginationSerializer
    queryset = Workout.objects.all().order_by('-created')

    def list(self, request, *args, **kwargs):
        queryset = Workout.objects.all().order_by('-created')

        serializer = WorkoutSerializerList(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = WorkoutSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, headers=headers)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = WorkoutSerializersRetrieve(instance)
        return Response(serializer.data)
