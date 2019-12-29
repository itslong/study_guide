from rest_framework import generics
from django.contrib.auth.models import User

from sg_backend.models import Categories
from sg_backend.serializers import UsersListSerializer, UserDetailSerializer, UserDetailWithAllData, CategoriesListSerializer, UserCategoryDetails, CategoryWithTopicsSerializer


class AllUsersListView(generics.ListAPIView):
    serializer_class = UsersListSerializer
    queryset = User.objects.all()


class UserDetailsView(generics.RetrieveAPIView):
    serializer_class = UserDetailSerializer
    queryset = User.objects.all()


class UserDetailWithAllDataView(generics.RetrieveAPIView):
    serializer_class = UserDetailWithAllData
    queryset = User.objects.all()


class AllCategoriesListView(generics.ListAPIView):
    serializer_class = CategoriesListSerializer
    queryset = Categories.objects.all()


class UserDetailsCategoriesView(generics.RetrieveAPIView):
    serializer_class = UserCategoryDetails
    queryset = User.objects.all()

