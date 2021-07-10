from collections import OrderedDict

from django.utils.translation import gettext_lazy as _

from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class CustomPageNumberPagination(PageNumberPagination):
    """
    A simple page number based style that supports page numbers as
    query parameters. For example:

    http://127.0.0.1:8000/blog/?page=4
    http://127.0.0.1:8000/blog/?page=4&records=100
    """
    # Overriding page size activates pagination.
    # Defaults to `None`, meaning pagination is disabled.
    page_size = 1  # only 2 for testing

    # Client can control the page size using this query parameter.
    # Default is 'None'. Set to eg 'page_size' to enable usage.
    page_size_query_param = 'records'

    # Set to an integer to limit the maximum page size the client may request.
    # Only relevant if 'page_size_query_param' has also been set.
    max_page_size = 10

    invalid_page_message = "Invalid Page Number. Please check your page number."

    def get_paginated_response(self, data):
        """
        Custom pagination resoponse style
        """
        return Response(OrderedDict([
            ('total_records', self.page.paginator.count),
            ('next_page_link', self.get_next_link()),
            ('previous_page_link', self.get_previous_link()),
            ('results', data)
        ]))
