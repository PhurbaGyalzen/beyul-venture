from .models import Package, Review, Photo

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
            'rating',
            'created_on',
            'updated_on',
        )

        extra_kwargs = {
            'reviewed_package': {'view_name': 'package-detail', 'lookup_field': 'slug'}
        }


class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photo
        fields = (
            'package',
            'image1',
            'image2',
            'image3',
            'image4',
            'image5',
            'image6',
        )

        extra_kwargs = {
            'package': {'view_name': 'package-detail', 'lookup_field': 'slug'}
        }


class PackageSerializer(serializers.HyperlinkedModelSerializer):

    content = FixAbsolutePathSerializer()
    reviews = ReviewSerializer(many=True, read_only=True)
    total_reviews = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()
    photos = PhotoSerializer(read_only=True, source='images')

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
            'reviews',
            'photos',
        )
        extra_kwargs = {
            'url': {'view_name': 'package-detail', 'lookup_field': 'slug'},
        }

    def get_total_reviews(self, obj):
        return obj.reviews.count()

    def get_average_rating(self, obj):
        return obj.reviews.aggregate(Avg('rating'))['rating__avg']
