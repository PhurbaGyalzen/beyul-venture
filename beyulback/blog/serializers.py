from .models import Blog, Tag, Comment

from django.contrib.auth import get_user_model

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
User = get_user_model()  # User is now the CustomUser


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['url', 'body', 'user']


class BlogSerializer(serializers.HyperlinkedModelSerializer):
    comment = CommentSerializer(many=True, read_only=True, source="comments")

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
            'comment'
        )
        extra_kwargs = {
            'url': {'view_name': 'blog-detail', 'lookup_field': 'slug'},
            'tags': {'view_name': 'tag-detail', 'lookup_field': 'slug'},
        }


class ReadOnlyModelSerializer(serializers.HyperlinkedModelSerializer):
    """
        Custom serializers for read only
    """

    def get_fields(self, *args, **kwargs):
        fields = super().get_fields(*args, **kwargs)
        for field in fields:
            fields[field].read_only = True
        return fields


class TagSerializer(ReadOnlyModelSerializer):
    posts = BlogSerializer(many=True, read_only=True, source="post")

    class Meta:
        model = Tag
        fields = ['url', 'name', 'posts']
        extra_kwargs = {
            'url': {'view_name': 'tag-detail', 'lookup_field': 'slug'}
        }


class UserSerializer(ReadOnlyModelSerializer):
    posts = BlogSerializer(many=True, read_only=True, source="post")

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'profile_pic', 'posts']
        # Alternative way of making all the fields read only
        # use case: put the below field in side any Model serializer's meta class
        # read_only_fields = [f.name for f in MyModel._meta.get_fields()]


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)

        # to obtain the email and first_name from token
        token['email'] = user.email
        token['first_name'] = user.first_name
        return token
