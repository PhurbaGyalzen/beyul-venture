from blog.serializers import BlogSerializer, ReadOnlyModelSerializer
from django.contrib.auth import get_user_model

from rest_framework import serializers

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


class RegistrationSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(max_length=100, min_length=11)
    first_name = serializers.CharField(max_length=50, min_length=2)
    password = serializers.CharField(max_length=150, write_only=True)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'password')

    def validate(self, args):
        email = args.get('email', None)
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                {'email': ('email already exists')})

        return super().validate(args)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)

        # to obtain the email and first_name from token
        token['email'] = user.email
        token['first_name'] = user.first_name
        return token
