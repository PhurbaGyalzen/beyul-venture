from django.shortcuts import render
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, RegistrationSerializer
from blog.custompaginations import RemovePageNumberPagination

from rest_framework.response import Response
from rest_framework import status, viewsets, serializers, generics


User = get_user_model()


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = RemovePageNumberPagination


class RegistrationAPIView(generics.GenericAPIView):

    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response({
                "Message": "User created successfully",
                "User": serializer.data}, status=status.HTTP_201_CREATED
            )

        return Response({"Errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
