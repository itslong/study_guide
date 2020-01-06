from django.urls import path, re_path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    path('users/', views.AllUsersListView.as_view()),
    path('user/<int:pk>/', views.UserDetailsView.as_view()),
    path('user/<int:pk>/all/', views.UserDetailWithAllDataView.as_view()),
    path('user/<int:pk>/categories/', views.UserDetailsCategoriesView.as_view()),

    path('categories/', views.AllCategoriesListView.as_view()),
    path('category/<int:pk>/', views.CategoryDetailsWithTopicsView.as_view()),

    path('topics/', views.AllTopicsListView.as_view()),
    path('topic/<int:pk>/', views.TopicDetailsWithNotesView.as_view()),

    path('notes/', views.AllNotesListView.as_view()),
    path('note/<int:pk>/', views.NoteDetailsView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
