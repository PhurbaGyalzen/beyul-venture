from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_clap(value):
    if value > 10:
        raise ValidationError(
            _('You can only clap maximum 10 times.')
        )
    elif value < 0:
        raise ValidationError(
            _('Does not support negative claps.')
        )


def validate_comment_like(value):
    if value > 1:
        raise ValidationError(
            _('Cannot react more than one.')
        )
    elif value < 0:
        raise ValidationError(
            _('Cannot accept negative values.')
        )
