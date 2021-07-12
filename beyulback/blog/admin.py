from .models import Blog, Tag, Comment, Clap

from mptt.admin import MPTTModelAdmin

from django.contrib import admin

admin.site.register(Blog)
admin.site.register(Tag)
admin.site.register(Comment, MPTTModelAdmin)
admin.site.register(Clap)
