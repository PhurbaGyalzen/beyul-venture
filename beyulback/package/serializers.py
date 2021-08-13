from .models import Package, Review, Photo, Itinerary

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
    writer_name = serializers.SerializerMethodField()
    writer_profile = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = (
            'url',
            'writer',
            'writer_name',
            'writer_profile',
            'title',
            'body',
            'rating',
            'created_on',
            'updated_on',
        )

    def get_writer_name(self, obj):
        return obj.writer.first_name

    def get_writer_profile(self, obj):
        return f"http://127.0.0.1:8000/media/{obj.writer.profile_pic}"


class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photo
        fields = (
            'image1',
            'image2',
            'image3',
            'image4',
            'image5',
            'image6',
        )


class ItinerarySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Itinerary
        fields = (
            'day',
            'title',
            'description'
        )


class PackageSerializer(serializers.HyperlinkedModelSerializer):

    content = FixAbsolutePathSerializer()
    reviews = ReviewSerializer(many=True, read_only=True)
    total_reviews = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()
    photos = PhotoSerializer(read_only=True, source='images')
    itinerary = ItinerarySerializer(
        many=True, read_only=True, source='itinerarys')

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
            'itinerary',
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
