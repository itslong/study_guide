from rest_framework import serializers

from django.contrib.auth.models import User
from .models import Categories, Topics, Notes


class BaseCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'


class CategoriesWithUsersListSerializer(serializers.ModelSerializer):
    """
    Displays the Username, email and Id for each Category.
    """
    username = serializers.ReadOnlyField(source='user.username')
    email = serializers.ReadOnlyField(source='user.email')
    user_id = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = Categories
        fields = ['id', 'category_name', 'category_desc', 'user_id', 'username', 'email']


class UsersListSerializer(serializers.ModelSerializer):
    """
    Displays all Users
    """
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'groups']


class UserDetailSerializer(serializers.ModelSerializer):
    """
    Display a single user's categories
    """
    categories = BaseCategoriesSerializer(source='categories_set', many=True, read_only=True)

    class Meta:
        depth = 1
        model = User
        fields = ['id', 'username', 'email', 'categories']
