from .models import Blog, Tag
from .serializers import CustomTokenObtainPairSerializer
from .serializers import (
    BlogSerializer,
    UserSerializer,
    TagSerializer,
)
from .custompaginations import RemovePageNumberPagination

from django.contrib.auth import get_user_model

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView

User = get_user_model()  # User is now the CustomUser


class CustomObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = CustomTokenObtainPairSerializer


class BlogView(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    # access the view functions,if a valid token is provided
    authentication_classes = [JWTAuthentication]
    # anyone can read the post but user must be logged in to post or delete
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    # pagination_class = RemovePageNumberPagination


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = RemovePageNumberPagination


class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    pagination_class = RemovePageNumberPagination
    lookup_field = 'slug'
