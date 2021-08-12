from .serializers import PackageSerializer, ReviewSerializer
from .models import Package, Review

from django.db.models import Avg
from django.http import JsonResponse

from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import viewsets


class PackageView(viewsets.ModelViewSet):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer
    # access the view functions,if a valid token is provided
    authentication_classes = [JWTAuthentication]
    # anyone can read the post but user must be logged in to post or delete
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    # pagination_class = RemovePageNumberPagination


class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    # access the view functions,if a valid token is provided
    authentication_classes = [JWTAuthentication]
    # anyone can read the post but user must be logged in to post or delete
    permission_classes = [IsAuthenticatedOrReadOnly]
    # pagination_class = RemovePageNumberPagination


def AvgRatingView(request, slug):
    reviews = Review.objects.filter(reviewed_package__slug=slug)
    if reviews:
        average_rating = reviews.aggregate(Avg('rating'))
        average_rating['status'] = True
        average_rating['total_reviewers'] = reviews.count()
    else:
        average_rating = {"status": "package doesn't exists."}
    return JsonResponse(average_rating, safe=True)
