from rest_framework.routers import DefaultRouter

from . import viewsets

router = DefaultRouter()

router.register(r'posts', viewsets.PostView, basename="Posts")
router.register(r'comments', viewsets.CommentViewSet, basename="Comment")
router.register(r'likes', viewsets.LikeViewSet, basename="Likes")
router.register(r'reposts', viewsets.RepostViewSet, basename="reposts")

urlpatterns = router.urls