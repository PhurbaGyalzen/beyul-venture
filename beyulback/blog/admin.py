from .models import Blog, Tag, Comment, Clap

from django.contrib import admin

admin.site.register(Blog)
admin.site.register(Tag)
admin.site.register(Comment)
admin.site.register(Clap)
