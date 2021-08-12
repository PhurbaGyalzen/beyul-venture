from .models import Package

from django.conf import settings

from rest_framework import serializers


SEARCH_PATTERNN = 'src=\"/media/uploads/'
SITE_DOMAIN = "http://127.0.0.1:8000"
REPLACE_WITH = 'src=\"%s/media/uploads/' % SITE_DOMAIN


class FixAbsolutePathSerializer(serializers.Field):
    def to_representation(self, value):
        return value.replace(SEARCH_PATTERNN, REPLACE_WITH)


class PackageSerializer(serializers.HyperlinkedModelSerializer):

    content = FixAbsolutePathSerializer()

    class Meta:
        model = Package
        fields = (
            'url',
            'id',
            'name',
            'slug',
            'description',
            'content',
            'created_on',
            'updated_on',
            'thumbnail',
            'price',
            'duration',
            'difficulty_level'
        )
        extra_kwargs = {
            'url': {'view_name': 'package-detail', 'lookup_field': 'slug'},
        }
