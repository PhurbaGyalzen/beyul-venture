from rest_framework import viewsets
from .models import Blog
from .serializers import BlogSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.authentication import JWTAuthentication


class BlogView(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    # access the view functions,if a valid token is provided
    authentication_classes = [JWTAuthentication]
    # anyone can read the post but user must be logged in to post or delete
    permission_classes = [IsAuthenticatedOrReadOnly]
