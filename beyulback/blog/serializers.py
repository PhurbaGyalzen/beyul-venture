from rest_framework import serializers
from .models import Blog
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class BlogSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Blog
        fields = (
            'url',
            'id',
            'title',
            'slug',
            'description',
            'tags',
            'likes',
            'content',
            'created_on',
            'updated_on',
            'thumbnail',
            'author',
            'status',
        )
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class ReadOnlyModelSerializer(serializers.ModelSerializer):
    """
        Custom serializers for read only
    """

    def get_fields(self, *args, **kwargs):
        fields = super().get_fields(*args, **kwargs)
        for field in fields:
            fields[field].read_only = True
        return fields


class UserSerializer(ReadOnlyModelSerializer):
    posts = BlogSerializer(many=True, read_only=True, source="post")

    class Meta:
        model = User
        fields = ['id', 'username', 'posts']
        # Alternative way of making all the fields read only
        # use case: put the below field in side any Model serializer's meta class
        # read_only_fields = [f.name for f in MyModel._meta.get_fields()]


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)

        # to obtain the username from token
        token['username'] = user.username
        return token
