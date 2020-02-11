from django.urls import path
from knox import views as knox_views
from sg_auth import views

urlpatterns = [
  path('register/', views.RegistrationView.as_view()),
  path('login/', views.LoginView.as_view()),
  path('logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
  path('logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
]
