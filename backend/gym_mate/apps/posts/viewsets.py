from .serializers import *
from rest_framework import permissions, viewsets, response, status, mixins
from django.shortcuts import get_object_or_404
from rest_framework.response import Response


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    pagination_class = PaginationSerializer
    queryset = Posts.objects.all().order_by("-created")

    # Create post
    def create(self, request, *args, **kwargs):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            post = serializer.save()
            return Response(
                {"message": "Post created successfully!", "Post": serializer.data},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request, *args, **kwargs):
        queryset = Posts.objects.all().order_by("-created")

        filtered_by_user = self.request.query_params.get("created-by")
        if filtered_by_user:
            queryset = Posts.objects.filter(user=filtered_by_user).order_by("-created")

        serializer = PostSerializer(queryset, many=True)
        data = serializer.data
        return Response(data)

    def retrieve(self, request, pk=None):
        queryset = Posts.objects.all()
        post = get_object_or_404(queryset, pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    def destroy(self, request, pk=None):
        post = self.get_object()
        self.perform_destroy(post)
        return Response(
            {
                "message": "Post succesfully deleted",
            },
            status=status.HTTP_204_NO_CONTENT,
        )

class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommmentPostSerializer
    pagination_class = PaginationSerializer
    queryset = CommentPost.objects.all().order_by("-created")

    def create(self, request, *args, **kwargs):
        serializer = CommmentPostSerializer(data=request.data)
        if serializer.is_valid():
            comment = serializer.save()
            serializer.update_comment_total_value(
                {"comment_post": comment.comment_post.id}
            )
            return Response(
                {"message": "Comment created", "Comment": serializer.data},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        comment = self.get_object()
        serializer = CommmentPostSerializer(comment, data=request.data, partial=True)
        if serializer.is_valid():
            hidden = serializer.hide_comment(
                {
                    "id": comment.id,
                    "comment_post": comment.comment_post.id,
                    "comment_user": comment.comment_user.id,
                }
            )
            serializer.save()
            if hidden == "hidden":
                return Response(
                    {"message": "Comment succesfully hidden!"},
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {"message": "Comment is no longer hidden!"},
                    status=status.HTTP_200_OK,
                )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        comment = self.get_object()
        serializer = CommmentPostSerializer(comment, data=request.data)
        serializer.delete_comment({"comment_post": comment.comment_post.id})
        comment.delete()
        return Response(
            {
                "message": "Comment succesfully deleted",
            },
            status=status.HTTP_204_NO_CONTENT,
        )


class LikeViewSet(viewsets.ModelViewSet):
    serializer_class = LikeSerializer
    pagination_class = PaginationSerializer
    queryset = Junction_likes.objects.all().order_by("-created")

    def create(self, request, *args, **kwargs):
        serializer = LikeSerializer(data=request.data)
        if serializer.is_valid():
            like = serializer.save()
            if like == "removed":
                return Response(
                    {"message": "Like removed from post!"}, status=status.HTTP_200_OK
                )
            # serializer.update_like_value({'likes_post': like.likes_post.id})
            else:
                return Response(
                    {"message": "Liked successfully!"}, status=status.HTTP_201_CREATED
                )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Filter: Liked by <user_id>
    def list(self, request, *args, **kwargs):
        queryset = Junction_likes.objects.all().order_by("-created")

        filtered_by_user = self.request.query_params.get("liked-by")
        if filtered_by_user:
            queryset = Junction_likes.objects.filter(
                likes_user=filtered_by_user
            ).order_by("-created")

        serializer = LikeSerializer(queryset, many=True)
        data = serializer.data
        return Response(data)


class RepostViewSet(viewsets.ModelViewSet):
    serializer_class = RepostSerializer
    pagination_class = PaginationSerializer
    queryset = Junction_repost.objects.all().order_by("-created")

    def create(self, request, *args, **kwargs):
        serializer = RepostSerializer(data=request.data)
        if serializer.is_valid():
            repost = serializer.save()
            if repost == "removed":
                return Response(
                    {"message": "Repost removed from post!"}, status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {"message": "Reposted successfully!"},
                    status=status.HTTP_201_CREATED,
                )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Filter: Reposted by <user_id>
    def list(self, request, *args, **kwargs):
        queryset = Junction_repost.objects.all().order_by("-created")

        filtered_by_user = self.request.query_params.get("reposted-by")
        if filtered_by_user:
            queryset = Junction_repost.objects.filter(
                repost_user=filtered_by_user
            ).order_by("-created")

        serializer = RepostSerializer(queryset, many=True)
        data = serializer.data
        return Response(data)
