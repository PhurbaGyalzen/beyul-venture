import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import stripe
from payment.views import get_actual_amount

stripe.api_key = 'sk_test_51JJrwRDyVuOwHMJSzH1MQF5sxkv3SgmZK1DYcyaC6NMC8lkoBkazeZwJnDbjVXLwi3FVVzoCNxo6aCjHOiXZtjau000bk0DcMY'

@csrf_exempt
@require_http_methods(['POST'])
def create_payment_intent(request):
    data = json.loads(request.body)
    intent = stripe.PaymentIntent.create(
        amount=get_actual_amount(69),
        currency='npr'
    )
    return JsonResponse({'clientSecret': intent['client_secret']})

