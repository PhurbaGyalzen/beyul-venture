from django.shortcuts import render
from .serializers import BookingSerializer
from .models import Booking

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.authentication import JWTAuthentication
from django_auto_prefetching import AutoPrefetchViewSetMixin


class BookingView(AutoPrefetchViewSetMixin, viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    authentication_classes = [JWTAuthentication]
    # you should be authenticated to perform any request (Yeah even get request)
    # but other permissions are not added yet. 👎 lazy me
    permission_classes = [IsAuthenticated]
    # use IsAuthenticatedOrReadOnly to allow get request without auth key
