from .models import Package, Review

from django.conf import settings
from django.db.models import Avg

from rest_framework import serializers


SEARCH_PATTERNN = 'src=\"/media/uploads/'
SITE_DOMAIN = "http://127.0.0.1:8000"
REPLACE_WITH = 'src=\"%s/media/uploads/' % SITE_DOMAIN


class FixAbsolutePathSerializer(serializers.Field):
    def to_representation(self, value):
        return value.replace(SEARCH_PATTERNN, REPLACE_WITH)


class ReviewSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Review
        fields = (
            'url',
            'writer',
            'reviewed_package',
            'title',
            'body',
            'rating'
        )

        extra_kwargs = {
            'reviewed_package': {'view_name': 'package-detail', 'lookup_field': 'slug'}
        }


class PackageSerializer(serializers.HyperlinkedModelSerializer):

    content = FixAbsolutePathSerializer()
    reviews = ReviewSerializer(many=True, read_only=True)
    total_reviews = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()

    class Meta:
        model = Package
        fields = (
            'url',
            'name',
            'slug',
            'description',
            'content',
            'created_on',
            'updated_on',
            'thumbnail',
            'price',
            'duration',
            'difficulty_level',
            'total_reviews',
            'average_rating',
            'reviews'
        )
        extra_kwargs = {
            'url': {'view_name': 'package-detail', 'lookup_field': 'slug'},
        }

    def get_total_reviews(self, obj):
        return obj.reviews.count()

    def get_average_rating(self, obj):
        return obj.reviews.aggregate(Avg('rating'))['rating__avg']
