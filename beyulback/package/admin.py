from .models import Package, Review, Photo, Itinerary

from django.contrib import admin


class PackageAdmin(admin.ModelAdmin):
    exclude = ('slug',)


admin.site.register(Review)
admin.site.register(Package, PackageAdmin)
admin.site.register(Itinerary)
admin.site.register(Photo)
