
from ._stripe import stripe_view
from django.urls import path, include

urlpatterns = [
    path('create-payment-intent/', stripe_view.create_payment_intent),
]