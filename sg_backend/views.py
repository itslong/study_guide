from rest_framework import generics
from django.contrib.auth.models import User

from sg_backend.models import Categories, Topics, Notes
from . import serializers

# User based views
class AllUsersListView(generics.ListAPIView):
    serializer_class = serializers.UsersListSerializer
    queryset = User.objects.all()


class UserDetailsView(generics.RetrieveAPIView):
    serializer_class = serializers.UserDetailSerializer
    queryset = User.objects.all()


class UserDetailWithAllDataView(generics.RetrieveAPIView):
    serializer_class = serializers.UserDetailWithAllData
    queryset = User.objects.all()


class UserDetailsCategoriesView(generics.RetrieveAPIView):
    serializer_class = serializers.UserCategoryDetails
    queryset = User.objects.all()


# Categories based views
class AllCategoriesListView(generics.ListAPIView):
    serializer_class = serializers.CategoriesListSerializer
    queryset = Categories.objects.all()


class CategoryDetailsWithTopicsView(generics.RetrieveAPIView):
    serializer_class = serializers.CategoryDetailsWithTopicsOnlySerializer
    queryset = Categories.objects.all()


class CategoryAddView(generics.CreateAPIView):
    queryset = Categories.objects.all()
    serializer_class = serializers.CategoryCreateSerializer

    def perform_create(self, serializer):
      serializer.save()


# Topics based views
class AllTopicsListView(generics.ListAPIView):
    serializer_class = serializers.TopicsListSerializer
    queryset = Topics.objects.all()


class TopicDetailsWithNotesView(generics.RetrieveAPIView):
    serializer_class = serializers.TopicsListWithNotesSerializer
    queryset = Topics.objects.all()


# Notes based views
class AllNotesListView(generics.ListAPIView):
    serializer_class = serializers.NotesListSerializer
    queryset = Notes.objects.all()


class NoteDetailsView(generics.RetrieveAPIView):
    serializer_class = serializers.NotesListSerializer
    queryset = Notes.objects.all()
