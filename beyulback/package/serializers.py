from .models import Package, Review, Photo, Itinerary, UsefulInformation

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
            'reviewed_package',
            'writer',
            'writer_name',
            'writer_profile',
            'title',
            'body',
            'rating',
            'created_on',
            'updated_on',
        )

        extra_kwargs = {
            'reviewed_package': {'view_name': 'package-detail', 'lookup_field': 'slug'},
        }

    def get_writer_name(self, obj):
        return obj.writer.first_name

    def get_writer_profile(self, obj):
        return f"http://127.0.0.1:8000/media/{obj.writer.profile_pic}"


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
            'package': {'view_name': 'package-detail', 'lookup_field': 'slug'},
        }


class ItinerarySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Itinerary
        fields = (
            'day',
            'title',
            'description',
            'package',
        )

        extra_kwargs = {
            'package': {'view_name': 'package-detail', 'lookup_field': 'slug'},
        }


class UsefulInformationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UsefulInformation
        fields = (
            'sn',
            'title',
            'description',
            'package',
        )

        extra_kwargs = {
            'package': {'view_name': 'package-detail', 'lookup_field': 'slug'},
        }


class PackageSerializer(serializers.HyperlinkedModelSerializer):

    content = FixAbsolutePathSerializer()
    reviews = ReviewSerializer(many=True, read_only=True)
    total_reviews = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()
    photos = PhotoSerializer(read_only=True, source='images')
    itinerary = ItinerarySerializer(
        many=True,
        read_only=True,
        source='itinerarys'
    )
    useful_info = UsefulInformationSerializer(
        many=True,
        read_only=True,
        source='usefulinformations'
    )

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
            'useful_info',
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
