from rest_framework.routers import DefaultRouter

from . import viewsets

router = DefaultRouter()

router.register(r'posts', viewsets.PostView, basename="Posts")
#router.register(r'posts-comments', viewsets.CommentViewSet, basename="Comment")

urlpatterns = router.urls

