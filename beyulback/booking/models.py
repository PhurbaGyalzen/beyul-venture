from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _
from django.conf import settings

from package.models import Package

PAYMENT_METHODS = (
    ('Esewa', 'Esewa'),
    ('Stripe', 'Stripe')
)


class Booking(models.Model):

    total_person = models.PositiveSmallIntegerField(
        _('total person'),
        validators=[MinValueValidator(1)]
    )
    booked_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="booking_user"
    )
    booked_on = models.DateTimeField(
        _('create on'),
        auto_now_add=True
    )

    package = models.ForeignKey(Package, on_delete=models.CASCADE)

    payment_method = models.CharField(
        _('payment method'),
        choices=PAYMENT_METHODS,
        max_length=15
    )

    def __str__(self):
        return f"{self.booked_by.first_name} booked {self.package.name}"
