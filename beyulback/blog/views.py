from .models import Blog, Tag, Comment, Clap, CommentLike
from users.serializers import CustomTokenObtainPairSerializer
from .serializers import (
    BlogSerializer,
    TagSerializer,
    CommentSerializer,
    ClapSerializer,
    CommentLikeSerializer,
)
from .custompaginations import RemovePageNumberPagination
from django.contrib.auth import get_user_model

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.filters import SearchFilter

User = get_user_model()  # User is now the CustomUser


class CustomObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = CustomTokenObtainPairSerializer


class BlogView(viewsets.ModelViewSet):
    queryset = Blog.objects.select_related('author').prefetch_related(
        'tags',
        'comments',
        'claps',
    ).filter(status=1)
    serializer_class = BlogSerializer
    # access the view functions,if a valid token is provided
    authentication_classes = [JWTAuthentication]
    # anyone can read the post but user must be logged in to post or delete
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    # pagination_class = RemovePageNumberPagination
    filter_backends = [SearchFilter]
    search_fields = ['title', 'description']


class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tag.objects.prefetch_related(
        'post__comments',
        'post__claps',
        'post__tags',
    ).all()
    serializer_class = TagSerializer
    pagination_class = RemovePageNumberPagination
    lookup_field = 'slug'


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.select_related(
        'user',
        'blog',
    ).all()
    serializer_class = CommentSerializer
    pagination_class = RemovePageNumberPagination


class CommentLikeViewSet(viewsets.ModelViewSet):
    queryset = CommentLike.objects.select_related(
        'user',
        'comment',
    ).all()
    serializer_class = CommentLikeSerializer
    pagination_class = RemovePageNumberPagination


class ClapViewSet(viewsets.ModelViewSet):
    queryset = Clap.objects.select_related(
        'user',
        'blog',
    ).all()
    serializer_class = ClapSerializer
    pagination_class = RemovePageNumberPagination
