
from datetime import datetime, timezone
from django.db import models
from django.template.defaultfilters import slugify
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model
User = get_user_model()  # User is now the CustomUser


STATUS = (
    (0, "Draft"),
    (1, "Publish")
)


class Blog(models.Model):
    title = models.CharField(_('title'), max_length=200)
    slug = models.SlugField(_('slug'), help_text=_(
        'Your title will be default slug if you leave it blank'), blank=True, unique=True)
    description = models.CharField(
        _('Descripiton'), max_length=500, help_text=_('Write a short description about your post'), blank=True)
    tags = models.CharField(_('tags'), help_text=_(
        'choose suitable tags for your blog'), max_length=100)
    likes = models.PositiveIntegerField(_('likes'))
    content = models.TextField(
        _('content'), help_text=_('Put your actual content here.'))
    created_on = models.DateTimeField(_('create on'), auto_now_add=True)
    updated_on = models.DateTimeField(_('update_on'), auto_now=True)
    thumbnail = models.ImageField(_('profile picture'),
                                  upload_to="blog",
                                  blank=True,
                                  help_text=_(
                                      'Insert a thumbnail for your blog.'),
                                  null=True
                                  )
    author = models.ForeignKey(
        User, related_name="post", on_delete=models.CASCADE)
    status = models.IntegerField(choices=STATUS, help_text=_(
        'publish or draft your blog (default=publish)'), default=1)

    class Meta:
        ordering = ['-created_on']

    def get_absolute_url(self):
        return reverse('blog_detail', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.title
