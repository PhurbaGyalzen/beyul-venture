from rest_framework import serializers

from .models import Booking


class BookingSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Booking
        fields = [
            'id',
            'total_person',
            'booked_by',
            'booked_on',
            'package',
            'payment_method'
        ]

        extra_kwargs = {
            'package': {'view_name': 'package-detail', 'lookup_field': 'slug'}
        }
