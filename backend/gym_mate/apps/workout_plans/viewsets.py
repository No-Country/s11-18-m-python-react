# Rest
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
# Apps Products
from .models import (
    Routine,
    PerformanceNoteWorkout,
    CommentsRoutine,
    RoutineAsignation,
    RoutineRating,
    Workout,
    Set,
    Categories
)
from .serializers import (
    RoutineSerializers,
    PaginationSerializer,
    PerformanceNoteWorkoutSerializers,
    CommentsRoutineSerializers,
    RoutineAsignationSerializers,
    RoutineRatingSerializers,
    RoutineSerializersList,
    RoutineSerializersRetrive,
    SetSerializer,
    SetSerializerList,
    SetSerializerRetrieve,
    WorkoutSerializer,
    WorkoutSerializersRetrieve,
    WorkoutSerializerList,
    CategoriesRoutineSerializers
)
# apps User
from apps.users.models import User

class RoutineViewSets(viewsets.ModelViewSet):
    """Class representing a Routine ViewSets"""
    
    serializer_class = RoutineSerializers
    pagination_class = PaginationSerializer
    queryset = Routine.objects.all().order_by('-created')
    
    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        permission_classes = []

        # Allow any user to perform list and retrieve actions
        if self.action in ['list', 'retrieve']:
            permission_classes.append(AllowAny)
        else:
            # Require that the user is a "coach" and is authenticated for other actions
            if self.request.user and self.request.user.is_authenticated and self.request.user.is_coach:
                permission_classes.append(IsAuthenticated)
            else:
                permission_classes.append(IsAdminUser)  

        return [permission() for permission in permission_classes]

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
   
   
class CategoriesRoutineViewSets(viewsets.ModelViewSet):
    """Class representing a Performance  Categories ViewSets"""

    serializer_class = CategoriesRoutineSerializers
    pagination_class = PaginationSerializer
    queryset = Categories.objects.all()
    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        permission_classes = []

        # Allow any user to perform list and retrieve actions
        if self.action in ['list', 'retrieve']:
            permission_classes.append(AllowAny)
        else:
            permission_classes.append(IsAdminUser)
            
        return [permission() for permission in permission_classes]

                
class PerformanceNoteWorkoutViewSets(viewsets.ModelViewSet):
    """Class representing a Performance Note Workout ViewSets"""

    permission_classes = [IsAuthenticated]
    serializer_class = PerformanceNoteWorkoutSerializers
    pagination_class = PaginationSerializer
    queryset = PerformanceNoteWorkout.objects.all().order_by('-created')


class CommentsRoutineViewSets(viewsets.ModelViewSet):
    """Class representing a Comments Routine ViewSets"""

    permission_classes = [IsAuthenticated]
    serializer_class = CommentsRoutineSerializers
    pagination_class = PaginationSerializer
    queryset = CommentsRoutine.objects.all().order_by('-created')
    

class RoutineAsignationViewSets(viewsets.ModelViewSet):
    """Class representing a  Routine Asignation ViewSets"""

    permission_classes = [IsAuthenticated]
    serializer_class = RoutineAsignationSerializers
    pagination_class = PaginationSerializer
    queryset = RoutineAsignation.objects.all()


class RoutineRatingViewSets(viewsets.ModelViewSet):
    """Class representing a  Routine Ratings ViewSets"""

    permission_classes = [IsAuthenticated]
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


class SetViewSets(viewsets.ModelViewSet):
    """ Class representing a Set viewset """
    serializer_class = SetSerializer
    pagination_class = PaginationSerializer
    queryset = Set.objects.all().order_by('-created')

    def list(self, request, *args, **kwargs):
        queryset = Set.objects.all().order_by('-created')

        serializer = SetSerializerList(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = SetSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, headers=headers)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = SetSerializerRetrieve(instance)
        return Response(serializer.data)
