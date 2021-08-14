from .models import Blog, Tag, Comment, Clap

from mptt.admin import MPTTModelAdmin

from django.contrib import admin


class BlogAdmin(admin.ModelAdmin):
    exclude = ('slug',)


class TagAdmin(admin.ModelAdmin):
    exclude = ('slug',)


admin.site.register(Blog, BlogAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Comment, MPTTModelAdmin)
admin.site.register(Clap)
