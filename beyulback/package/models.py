from blog.ImageCompressor import compress

from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
from django.template.defaultfilters import slugify
from django.utils.translation import gettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

DIFFICULTY_LEVELS = [
    ('😄 Easy', '😄 Easy'),
    ('😐 Medium', '😐 Medium'),
    ('⚒️ Hard', '⚒️ Hard'),
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
    best_season = models.CharField(
        _('Best Season'),
        help_text=_(
            'what is the best season for this package?'
        ),
        max_length=50
    )
    transportation = models.CharField(
        _('Transportation'),
        help_text=_(
            'what are the means of transportation?'
        ),
        max_length=100
    )
    starts_at = models.CharField(
        _('Starts at'),
        help_text=_(
            'From where does the journey starts?'
        ),
        max_length=50
    )
    ends_at = models.CharField(
        _('Ends at'),
        help_text=_(
            'Where does the journey ends?'
        ),
        max_length=50
    )
    age_requirement = models.CharField(
        _('Age Requirement'),
        help_text=_('Enter the required age'),
        max_length=50
    )
    min_people = models.PositiveSmallIntegerField(
        _('Minimum People'),
        default=1,
        help_text=_(
            'Enter the minimum number of people who can join the package'
        ),
        validators=[MinValueValidator(1)]
    )
    max_people = models.PositiveSmallIntegerField(
        _('Maximum People'),
        help_text=_(
            'Enter the maximum number of people who can join the package'
        )
    )

    meals = models.CharField(
        _('Meals'), help_text=_('Meal option'), max_length=255)

    price = models.IntegerField(
        _('price'),
        help_text=_('enter the package price')
    )

    altitude = models.DecimalField(
        _('Altitude'),
        help_text=_('Enter the altitude of the location.'),
        max_digits=6,
        decimal_places=2
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
        help_text=_('insert your title here'),
        max_length=255
    )
    body = models.TextField()
    created_on = models.DateTimeField(_('create on'), auto_now_add=True)
    updated_on = models.DateTimeField(_('update_on'), auto_now=True)
    rating = models.PositiveBigIntegerField(
        default=1,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )

    def __str__(self):
        return str(self.writer) + " review"


def upload_gallery_image(instance, filename):
    return f"gallery/{instance.package.slug}/{filename}"


class Photo(models.Model):
    image1 = models.ImageField(
        upload_to=upload_gallery_image,
        null=True,
        blank=True
    )
    image2 = models.ImageField(
        upload_to=upload_gallery_image,
        null=True,
        blank=True
    )
    image3 = models.ImageField(
        upload_to=upload_gallery_image,
        null=True,
        blank=True
    )
    image4 = models.ImageField(
        upload_to=upload_gallery_image,
        null=True,
        blank=True
    )
    image5 = models.ImageField(
        upload_to=upload_gallery_image,
        null=True,
        blank=True
    )
    image6 = models.ImageField(
        upload_to=upload_gallery_image,
        null=True,
        blank=True
    )
    package = models.OneToOneField(
        Package,
        on_delete=models.CASCADE,
        related_name="images",
        unique=True
    )

    def __str__(self):
        return self.package.name + " Gallery"
