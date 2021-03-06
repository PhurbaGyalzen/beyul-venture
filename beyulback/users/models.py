from django.db import models
from django.utils import timezone
from django.utils.http import urlquote
from django.utils.translation import gettext_lazy as _
from django.core.mail import send_mail
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

from PIL import Image


class CustomUserManager(BaseUserManager):

    def _create_user(
        self,
        email,
        first_name,
        password,
        is_staff,
        is_superuser,
        **extra_fields
    ):
        """
        Creates and saves a User with the given email, first_name and password.
        """
        now = timezone.now()
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            first_name=first_name,
            is_staff=is_staff,
            is_active=True,
            is_superuser=is_superuser,
            last_login=now,
            date_joined=now,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, first_name, password=None, **extra_fields):
        return self._create_user(
            email,
            first_name,
            password,
            False,
            False,
            **extra_fields
        )

    def create_superuser(self, email, first_name, password, **extra_fields):
        return self._create_user(
            email,
            first_name,
            password,
            True,
            True,
            **extra_fields
        )


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """
    A fully featured User model with admin-compliant permissions that uses
    a full-length email field as the username.

    Email, first_name and password are required. Other fields are optional.
    """
    email = models.EmailField(
        _('email address'),
        max_length=254,
        unique=True
    )
    first_name = models.CharField(
        _('first name'),
        max_length=30
    )
    last_name = models.CharField(
        _('last name'),
        max_length=30,
        blank=True
    )
    profile_pic = models.ImageField(
        _('profile picture'),
        default='profiles/default_profile.png',
        upload_to='profiles'
    )
    is_staff = models.BooleanField(
        _('staff status'), default=False,
        help_text=_(
            'Designates whether the user can log into this admin site.'
        )
    )
    is_active = models.BooleanField(
        _('active'), default=True,
        help_text=_(
            'Designates whether this user should be treated as '
            'active. Unselect this instead of deleting accounts.'
        )
    )
    date_joined = models.DateTimeField(
        _('date joined'),
        default=timezone.now
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name']

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def get_absolute_url(self):
        return "/users/%s/" % urlquote(self.email)

    def get_full_name(self):
        """
        Returns the first_name plus the last_name, with a space in between.
        """
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        "Returns the short name for the user."
        return self.first_name

    def email_user(self, subject, message, from_email=None):
        """
        Sends an email to this User.
        """
        send_mail(subject, message, from_email, [self.email])

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        super(CustomUser, self).save(*args, **kwargs)

        img = Image.open(self.profile_pic.path)
        # resizing the image before saving it in file system
        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
        img.save(self.profile_pic.path, optimize=True)
