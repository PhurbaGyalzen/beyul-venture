import readtime

from .customvalidators import validate_comment_like
from .models import Blog, Tag, Comment, Clap, CommentLike

from django.utils.translation import gettext_lazy as _
from django.conf import settings
from django.db.models import Sum
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from rest_framework.reverse import reverse
from rest_framework.validators import UniqueTogetherValidator


class CommentLikeSerializer(serializers.HyperlinkedModelSerializer):
    heart_eyes_count = serializers.IntegerField(
        validators=[validate_comment_like]
    )  # 😍
    thumbsup_count = serializers.IntegerField(
        validators=[validate_comment_like]
    )  # 👍
    thumbsdown_count = serializers.IntegerField(
        validators=[validate_comment_like]
    )  # 👎
    sunglasses_count = serializers.IntegerField(
        validators=[validate_comment_like]
    )  # 😎
    rocket_count = serializers.IntegerField(
        validators=[validate_comment_like]
    )  # 🚀

    class Meta:
        model = CommentLike
        fields = ['url', 'heart_eyes_count', 'thumbsup_count', 'thumbsdown_count',
                  'sunglasses_count', 'rocket_count', 'user', 'comment']

    validators = [
        UniqueTogetherValidator(
            queryset=CommentLike.objects.all(),
            fields=['user', 'comment'],
            message=_("User and comment fields must be unique together")
        )
    ]


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.SerializerMethodField()
    parent_key = serializers.SerializerMethodField()
    heart_eyes_count = serializers.SerializerMethodField()
    thumbsup_count = serializers.SerializerMethodField()
    thumbsdown_count = serializers.SerializerMethodField()
    sunglasses_count = serializers.SerializerMethodField()
    rocket_count = serializers.SerializerMethodField()
    created_on = serializers.SerializerMethodField()
    updated_on = serializers.SerializerMethodField()
    user_reaction = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = [
            'id',
            'url',
            'user_reaction',
            'body',
            'author',
            'user',
            'blog',
            'created_on',
            'updated_on',
            'parent_key',
            'heart_eyes_count',
            'thumbsup_count',
            'thumbsdown_count',
            'sunglasses_count',
            'rocket_count',
        ]
        extra_kwargs = {
            'blog': {'view_name': 'blog-detail', 'lookup_field': 'slug'}
        }

    def get_parent_key(self, obj):
        parent_obj = obj.parent
        if parent_obj is None:
            return None
        return parent_obj.pk

    def get_author(self, obj):
        return {'name': self._get_fullname(obj), 'profile_pic': self._get_user_profile(obj)}

    def _get_fullname(self, obj):
        last_name = obj.user.last_name
        if last_name:
            return f"{obj.user.first_name} {last_name}"
        return obj.user.first_name

    def _get_user_profile(self, obj):
        return f"http://127.0.0.1:8000/media/{obj.user.profile_pic}"

    def get_heart_eyes_count(self, obj):
        return self._aggregate_field(obj, 'heart_eyes_count')

    def get_thumbsup_count(self, obj):
        return self._aggregate_field(obj, 'thumbsup_count')

    def get_thumbsdown_count(self, obj):
        return self._aggregate_field(obj, 'thumbsdown_count')

    def get_sunglasses_count(self, obj):
        return self._aggregate_field(obj, 'sunglasses_count')

    def get_rocket_count(self, obj):
        return self._aggregate_field(obj, 'rocket_count')

    def _aggregate_field(self, obj, field):
        return obj.commentlikes.aggregate(Sum(field))[field + '__sum']

    def get_created_on(self, obj):
        return obj.created_on

    def get_updated_on(self, obj):
        return obj.updated_on

    def get_user_reaction(self, obj):
        user_id = self.context['request'].user.id
        if user_id is None:
            return None
        result = obj.commentlikes.filter(user__id=user_id)
        if not result:
            return None
        return CommentLikeSerializer(
            result[0],
            context={'request': self.context['request']}
        ).data


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
    comments = CommentSerializer(many=True, read_only=True)

    content = FixAbsolutePathSerializer()
    read_time = serializers.SerializerMethodField()
    total_claps = serializers.SerializerMethodField()
    author_name = serializers.SerializerMethodField()
    author_profile = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = (
            'url',
            'title',
            'slug',
            'description',
            'tags',
            'content',
            'read_time',
            'created_on',
            'updated_on',
            'thumbnail',
            'author',
            'author_name',
            'author_profile',
            'status',
            'comments',
            'total_claps'
        )
        extra_kwargs = {
            'url': {'view_name': 'blog-detail', 'lookup_field': 'slug'},
            'tags': {'view_name': 'tag-detail', 'lookup_field': 'slug'},
        }

    def get_total_claps(self, obj):
        return obj.claps.aggregate(Sum('count'))['count__sum']

    def get_author_name(self, obj):
        return obj.author.first_name

    def get_author_profile(self, obj):
        return f"http://127.0.0.1:8000/media/{obj.author.profile_pic}"

    def get_read_time(self, obj):
        result = readtime.of_html(obj.content)
        return result.text


class BlogListSerializer(BlogSerializer):

    class Meta(BlogSerializer.Meta):
        fields = sorted(tuple(
            set(BlogSerializer.Meta.fields) - set(['comments'])
        ))


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
