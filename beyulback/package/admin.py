from .models import Package, Review, Photo, Itinerary, UsefulInformation

from django.contrib import admin
from django.utils.translation import gettext_lazy as _


class InlinePhoto(admin.StackedInline):
    model = Photo


class InlineItinerary(admin.StackedInline):
    model = Itinerary
    extra = 0


class InlineUsefulInformation(admin.StackedInline):
    model = UsefulInformation
    extra = 0


class PackageAdmin(admin.ModelAdmin):
    inlines = [InlinePhoto, InlineItinerary, InlineUsefulInformation]
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
admin.site.register(UsefulInformation)
admin.site.register(Photo)
