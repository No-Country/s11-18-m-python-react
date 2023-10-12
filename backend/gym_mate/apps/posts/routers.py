from rest_framework.routers import DefaultRouter

from . import viewsets

router = DefaultRouter()

router.register(r'posts', viewsets.PostView, basename="Posts")

urlpatterns = router.urls