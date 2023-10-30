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
    WeekDay,
    Categories,
    RoutineFavorite
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
    WeekDaySerializer,
    CategoriesRoutineSerializers,
    CategoriesRoutineRetriveSerializers,
    RoutineFavoriteSerializers,
    RoutineFavoriteCreateSerializers
)
# apps User
from apps.users.models import User

class RoutineViewSets(viewsets.ModelViewSet):
    """Class representing a Routine ViewSets"""
    
    serializer_class = RoutineSerializers
    pagination_class = PaginationSerializer
    queryset = Routine.objects.all().order_by('-created')
    
    def get_permissions(self):

        permission_classes = []

        if self.action in ['list', 'retrieve']:
            permission_classes.append(AllowAny)
        else:
            if self.request.user and self.request.user.is_authenticated and self.request.user.is_coach:
                permission_classes.append(IsAuthenticated)
            else:
                permission_classes.append(IsAdminUser)  

        return [permission() for permission in permission_classes]
    
    def perform_create(self, serializer):
        
        serializer.save(id_user=self.request.user)


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

        permission_classes = []

        if self.action in ['list', 'retrieve']:
            permission_classes.append(AllowAny)
        else:
            permission_classes.append(IsAdminUser)
            
        return [permission() for permission in permission_classes]
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = CategoriesRoutineRetriveSerializers(instance)
        return Response(serializer.data)

                
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
    
    def perform_create(self, serializer):
        
        serializer.save(id_user=self.request.user)

class RoutineAsignationViewSets(viewsets.ModelViewSet):
    """Class representing a Routine Asignation ViewSets"""

    permission_classes = [IsAuthenticated]
    serializer_class = RoutineAsignationSerializers
    pagination_class = PaginationSerializer
    queryset = RoutineAsignation.objects.all()
    
    def perform_create(self, serializer):
        
        serializer.save(id_user=self.request.user)
        
    def list(self, request, *args, **kwargs):
        queryset = RoutineAsignation.objects.filter(
            id_user = self.request.user.id
        )

        serializer = RoutineFavoriteSerializers(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        serializer = RoutineAsignationSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, headers=headers)
        
        
class RoutineFavoriteViewSets(viewsets.ModelViewSet):
    """Class representing a Routine Favorite ViewSets"""

    permission_classes = [IsAuthenticated]
    serializer_class = RoutineFavoriteCreateSerializers
    pagination_class = PaginationSerializer
    queryset = RoutineFavorite.objects.all()
    
    def perform_create(self, serializer):
        
        serializer.save(id_user=self.request.user)

    def list(self, request, *args, **kwargs):
        queryset = RoutineFavorite.objects.filter(
            id_user = self.request.user.id
        )

        serializer = RoutineFavoriteSerializers(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        serializer = RoutineFavoriteCreateSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, headers=headers)
    

    
class RoutineRatingViewSets(viewsets.ModelViewSet):
    """Class representing a Routine Ratings ViewSets"""

    permission_classes = [IsAuthenticated]
    serializer_class = RoutineRatingSerializers
    pagination_class = PaginationSerializer
    queryset = RoutineRating.objects.all().order_by('-created')
    
    def perform_create(self, serializer):
        
        serializer.save(id_user=self.request.user)


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


class WeekDayViewSets(viewsets.ModelViewSet):
    serializer_class = WeekDaySerializer
    pagination_class = PaginationSerializer
    queryset = WeekDay.objects.all()

    def create(self, request, *args, **kwargs):
        day_serializer = WeekDaySerializer(data=request.data, many=True)
        day_serializer.is_valid(raise_exception=True)
        self.perform_create(day_serializer)
        headers = self.get_success_headers(day_serializer.data)
        return Response(day_serializer.data, headers=headers)
