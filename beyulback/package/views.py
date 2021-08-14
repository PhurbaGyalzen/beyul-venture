from .serializers import PackageSerializer, ReviewSerializer, PhotoSerializer
from .models import Package, Review, Photo

from django.db.models import Avg
from django.http import JsonResponse

from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import viewsets


class PackageView(viewsets.ModelViewSet):
    queryset = Package.objects.prefetch_related(
        'reviews',
        'images',
        'itinerarys',
        'usefulinformations',
    ).all()
    serializer_class = PackageSerializer
    # access the view functions,if a valid token is provided
    authentication_classes = [JWTAuthentication]
    # anyone can read the post but user must be logged in to post or delete
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    # pagination_class = RemovePageNumberPagination


class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.select_related(
        'writer',
        'reviewed_package'
    ).all()
    serializer_class = ReviewSerializer
    # access the view functions,if a valid token is provided
    authentication_classes = [JWTAuthentication]
    # anyone can read the post but user must be logged in to post or delete
    permission_classes = [IsAuthenticatedOrReadOnly]
    # pagination_class = RemovePageNumberPagination


class PhotoView(viewsets.ModelViewSet):
    queryset = Photo.objects.select_related('package').all()
    serializer_class = PhotoSerializer
    # access the view functions,if a valid token is provided
    authentication_classes = [JWTAuthentication]
    # will change the permission later
    permission_classes = [IsAuthenticatedOrReadOnly]
