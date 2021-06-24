from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = (
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
