from .customvalidators import validate_clap

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


class Tag(models.Model):
    name = models.CharField(_('name'), help_text=_(
        'Enter your tag name here.'), max_length=200, unique=True)
    slug = models.SlugField(_('slug'), help_text=_(
        'Tag name will be default slug if you leave it blank.'), blank=True, unique=True)

    def get_absolute_url(self):
        return reverse('cateogry_detail', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Blog(models.Model):
    title = models.CharField(_('title'), max_length=200)
    slug = models.SlugField(_('slug'), help_text=_(
        'Your title will be default slug if you leave it blank'), blank=True, unique=True)
    description = models.CharField(
        _('Descripiton'), max_length=500, help_text=_('Write a short description about your post'), blank=True)
    tags = models.ManyToManyField(Tag, help_text=_(
        'choose suitable tags for your blog'), related_name='post')
    content = models.TextField(
        _('content'), help_text=_('Put your actual content here.'))
    created_on = models.DateTimeField(_('create on'), auto_now_add=True)
    updated_on = models.DateTimeField(_('update_on'), auto_now=True)
    thumbnail = models.ImageField(_('thumbnail'),
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


class Comment(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='comments')
    blog = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name='comments')

    body = models.TextField()
    created_on = models.DateTimeField(_('create on'), auto_now_add=True)
    updated_on = models.DateTimeField(_('update_on'), auto_now=True)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return f"{self.user.first_name}{self.user.id}, In ({self.blog.title})-> comment: {self.body} "


class Clap(models.Model):
    count = models.PositiveSmallIntegerField(validators=[validate_clap])
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="claps")
    blog = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name="claps")

    created_on = models.DateTimeField(_('create on'), auto_now_add=True)
    updated_on = models.DateTimeField(_('update_on'), auto_now=True)

    def __str__(self):
        return f"{self.user.first_name} clapped {self.count} times in {self.blog.title} blog."

    class Meta:
        ordering = ['created_on']
        unique_together = ('user', 'blog',)
