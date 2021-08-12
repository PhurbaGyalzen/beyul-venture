from .models import Blog, Tag, Comment, Clap

from django.utils.translation import gettext_lazy as _
from django.conf import settings

from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['url', 'body', 'user', 'blog', 'parent']
        extra_kwargs = {
            'blog': {'view_name': 'blog-detail', 'lookup_field': 'slug'}
        }


class ClapSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Clap
        fields = ['url', 'count', 'user', 'blog']
        extra_kwargs = {
            'blog': {'view_name': 'blog-detail', 'lookup_field': 'slug'}
        }
    validators = [
        UniqueTogetherValidator(
            queryset=Clap.objects.all(),
            fields=['user', 'blog'],
            message=_("User and blog fields must be unique together")
        )
    ]

    def validate_count(self, value):
        if value > 10:
            raise serializers.ValidationError(
                _('You can only clap maximum 10 times.')
            )
        elif value < 0:
            raise serializers.ValidationError(
                _('Does not support negative claps.')
            )
        return value


SEARCH_PATTERNN = 'src=\"/media/uploads/'
SITE_DOMAIN = "http://127.0.0.1:8000"
REPLACE_WITH = 'src=\"%s/media/uploads/' % SITE_DOMAIN


class FixAbsolutePathSerializer(serializers.Field):
    def to_representation(self, value):
        return value.replace(SEARCH_PATTERNN, REPLACE_WITH)


class BlogSerializer(serializers.HyperlinkedModelSerializer):
    comment = CommentSerializer(many=True, read_only=True, source="comments")
    clap = ClapSerializer(many=True, read_only=True, source="claps")
    content = FixAbsolutePathSerializer()
    author_name = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = (
            'url',
            'title',
            'slug',
            'description',
            'tags',
            'content',
            'created_on',
            'updated_on',
            'thumbnail',
            'author',
            'author_name',
            'status',
            'comment',
            'clap'
        )
        extra_kwargs = {
            'url': {'view_name': 'blog-detail', 'lookup_field': 'slug'},
            'tags': {'view_name': 'tag-detail', 'lookup_field': 'slug'},
        }

    def get_author_name(self, obj):
        return obj.author.first_name


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
        fields = ['url', 'name', 'background_img', 'posts']
        extra_kwargs = {
            'url': {'view_name': 'tag-detail', 'lookup_field': 'slug'}
        }
