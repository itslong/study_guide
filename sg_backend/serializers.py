from rest_framework import serializers

from django.contrib.auth.models import User
from .models import Categories, Topics, Notes


# Notes
class NotesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        exclude = ['topic', ]


# Topics
class TopicsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topics
        exclude = ['category', ]


class TopicsListWithNotesSerializer(serializers.ModelSerializer):
    """
    List of all Topics with related notes.
    """
    notes = NotesListSerializer(source='notes_set', many=True)

    class Meta:
        model = Topics
        fields = ['id', 'topic_name', 'notes']


class TopicDetailsWithNotesSerializer(serializers.ModelSerializer):
    """
    A topic's details and its related notes.
    """
    notes = NotesListSerializer(source='notes_set', many=True)

    class Meta:
        model = Topics
        fields = ['id', 'topic_name', 'notes']


# Categories
class CategoriesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        exclude = ['user', ]


class CategoryDetailsWithTopicsOnlySerializer(serializers.ModelSerializer):
    """
    A Category's detail with related topics at depth 1.
    """
    topics = TopicsListSerializer(source='topics_set', many=True)

    class Meta:
        model = Categories
        fields = ['id', 'category_name', 'category_desc', 'topics']


class CategoryWithTopicsSerializer(serializers.ModelSerializer):
    """
    Gets the related topics to this category.
    """
    topics = TopicsListWithNotesSerializer(source='topics_set', many=True)

    class Meta:
        model = Categories
        fields = ['id', 'category_name', 'category_desc', 'topics']


class CategoryCreateSerializer(serializers.ModelSerializer):
    """
    Create a Category.
    """
    class Meta:
        model = Categories
        fields = '__all__'


# Users
class UsersListSerializer(serializers.ModelSerializer):
    """
    Displays all Users
    """
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'groups']


class UserDetailSerializer(serializers.ModelSerializer):
    """
    Displays non-sensitive fields about a User.
    """

    class Meta:
        model = User
        exclude = ['password', 'is_superuser', 'is_staff', 'is_active', 'user_permissions']


class UserDetailWithAllData(serializers.ModelSerializer):
    """
    Get all nested items from a User's Categories -> Topics -> Notes.
    """
    categories = CategoryWithTopicsSerializer(source='categories_set', many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'categories']


class UserCategoryDetails(serializers.ModelSerializer):
    """
    Get all categories (only) that belong to a User.
    """
    categories = CategoriesListSerializer(source='categories_set', many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'categories']
