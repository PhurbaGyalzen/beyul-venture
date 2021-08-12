from blog.ImageCompressor import compress

from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
from django.template.defaultfilters import slugify
from django.utils.translation import gettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

DIFFICULTY_LEVELS = [
    ('Easy', 'Easy'),
    ('Medium', 'Medium'),
    ('Hard', 'Hard'),
]


class Package(models.Model):
    name = models.CharField(
        _('name'),
        help_text=_(
            'Enter your package name here.'
        ),
        max_length=200,
        unique=True
    )
    slug = models.SlugField(
        _('slug'),
        help_text=_(
            'package name will be default slug if you leave it blank'
        ),
        blank=True,
        unique=True
    )
    description = models.CharField(
        _('Descripiton'),
        max_length=500,
        help_text=_('Write a short description about your post'),
        blank=True
    )

    content = RichTextUploadingField(
        _('content'),
        help_text=_('Put your actual content here.'),
        blank=True,
        null=True
    )

    created_on = models.DateTimeField(_('create on'), auto_now_add=True)
    updated_on = models.DateTimeField(_('update_on'), auto_now=True)
    thumbnail = models.ImageField(
        _('thumbnail'),
        upload_to="package",
        blank=True,
        help_text=_('Insert a thumbnail for your package.'),
        null=True
    )
    compress_thumbnail = models.BooleanField(
        _('compress thumbnail'),
        help_text=_(
            'checking this field will enable compression in thumbnail image.'
        ),
        default=False
    )

    price = models.IntegerField(
        _('price'),
        help_text=_('enter the package price')
    )
    difficulty_level = models.CharField(
        _('difficulty level'),
        help_text=_('choose the difficulty level'),
        default='easy',
        max_length=50,
        blank=False,
        choices=DIFFICULTY_LEVELS
    )

    duration = models.SmallIntegerField(
        _('duration'),
        help_text=_('Enter package duration in days'),
        default=1
    )

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Package, self).save(*args, **kwargs)
        if self.compress_thumbnail:
            compress(self.thumbnail.path, 30)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.name


class Review(models.Model):
    writer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    reviewed_package = models.ForeignKey(
        Package,
        related_name="reviews",
        on_delete=models.CASCADE
    )
    title = models.CharField(
        _('title'),
        help_text=_('insert yourt title here'),
        max_length=255
    )
    body = models.TextField()
    rating = models.IntegerField(
        default=1,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )

    def __str__(self):
        return str(self.writer) + " review"
