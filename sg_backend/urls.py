from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    path('categories/', views.AllCategoriesListView.as_view()),
    path('users/', views.AllUsersListView.as_view()),
    path('user/<int:pk>/', views.UserDetailsView.as_view()),
    path('user/<int:pk>/all/', views.UserDetailWithAllDataView.as_view()),
    path('user/<int:pk>/categories/', views.UserDetailsCategoriesView.as_view()),
    # path('user/<int:pk>/categories/<int:cid>/', views.CategoryDetailsWithTopicsView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
