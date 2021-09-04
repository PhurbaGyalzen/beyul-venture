from rest_framework import serializers

from .models import Booking


class BookingSerializer(serializers.HyperlinkedModelSerializer):
    total_amount = serializers.SerializerMethodField()

    class Meta:
        model = Booking
        fields = [
            'id',
            'total_person',
            'booked_by',
            'booked_on',
            'package',
            'payment_method',
            'total_amount'
        ]

        extra_kwargs = {
            'package': {'view_name': 'package-detail', 'lookup_field': 'slug'}
        }

    def get_total_amount(self, obj):
        return f"{obj.package.price * obj.total_person}"
