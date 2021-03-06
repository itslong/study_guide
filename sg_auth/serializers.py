from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User


# duplicate email addresses can not be registered
User._meta.get_field('email')._unique = True

class RegisterUserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(allow_blank=False)

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password', 'confirm_password')
        extra_kwargs = {
          'password': {'write_only': True},
          'email': {'required': True, 'allow_blank': False}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], 
            validated_data['email'],
            validated_data['password']
        )
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_staff')


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user

        raise serializers.ValidationError('Unable to log in with provided credentials.')
