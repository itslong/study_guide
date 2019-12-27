from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    path('categories/', views.CategoriesListView.as_view()),
    path('users/', views.UsersListView.as_view()),
    path('users/<int:pk>/', views.UserDetailListView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
