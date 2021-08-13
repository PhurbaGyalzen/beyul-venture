from .models import Package, Review, Photo, Itinerary

from django.contrib import admin

admin.site.register(Review)
admin.site.register(Package)
admin.site.register(Itinerary)
admin.site.register(Photo)
