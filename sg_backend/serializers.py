from rest_framework import serializers

from django.contrib.auth.models import User
from .models import Categories, Topics, Notes


class CategoriesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        exclude = ['user', ]


class NotesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        exclude = ['topic', ]


# class TopicsListSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Topics
#         exclude = ['category', ]
#
#
# class CategoryDetailsWithTopicsSerializer(serializers.ModelSerializer):
#       """
#       A Category's detail with related topics at depth 1.
#       """
#     topics = TopicsListSerializer(source='topics_set', many=True)
#
#     class Meta:
#         model = Categories
#         exclude = ['user']


class TopicsWithNotesSerializer(serializers.ModelSerializer):
    """
    Gets the related notes to this topic.
    """
    notes = NotesListSerializer(source='notes_set', many=True)

    class Meta:
        model = Topics
        fields = ['id', 'topic_name', 'notes']


class CategoryWithTopicsSerializer(serializers.ModelSerializer):
    """
    Gets the related topics to this category.
    """
    topics = TopicsWithNotesSerializer(source='topics_set', many=True)

    class Meta:
        model = Categories
        fields = ['id', 'category_name', 'category_desc', 'topics']


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
