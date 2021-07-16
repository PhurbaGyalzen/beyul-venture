from blog.serializers import BlogSerializer, ReadOnlyModelSerializer
from django.contrib.auth import get_user_model

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()


class UserSerializer(ReadOnlyModelSerializer):
    posts = BlogSerializer(many=True, read_only=True, source="post")

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'profile_pic', 'posts']
        # Alternative way of making all the fields read only
        # use case: put the below field in side any Model serializer's meta class
        # read_only_fields = [f.name for f in MyModel._meta.get_fields()]


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)

        # to obtain the email and first_name from token
        token['email'] = user.email
        token['first_name'] = user.first_name
        return token
