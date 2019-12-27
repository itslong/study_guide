from rest_framework import generics
from django.contrib.auth.models import User

from sg_backend.models import Categories
from sg_backend.serializers import CategoriesWithUsersListSerializer, UsersListSerializer, UserDetailSerializer


class CategoriesListView(generics.ListAPIView):
    serializer_class = CategoriesWithUsersListSerializer
    queryset = Categories.objects.all()


class UsersListView(generics.ListAPIView):
    serializer_class = UsersListSerializer
    queryset = User.objects.all()


class UserDetailListView(generics.RetrieveAPIView):
    serializer_class = UserDetailSerializer
    queryset = User.objects.all()

