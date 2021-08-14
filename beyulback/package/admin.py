from .models import Package, Review, Photo, Itinerary

from django.contrib import admin
from django.utils.translation import gettext_lazy as _


class InlinePhoto(admin.StackedInline):
    model = Photo


class InlineItinerary(admin.StackedInline):
    model = Itinerary
    extra = 0


class PackageAdmin(admin.ModelAdmin):
    inlines = [InlinePhoto, InlineItinerary]
    list_display = (
        'name',
        'min_people',
        'max_people',
        'price',
        'thumbnail',
        'updated_on'
    )
    list_editable = (
        'min_people',
        'max_people',
        'price',
        'thumbnail',
    )
    exclude = ('slug',)


admin.site.register(Review)
admin.site.register(Package, PackageAdmin)
admin.site.register(Itinerary)
admin.site.register(Photo)
