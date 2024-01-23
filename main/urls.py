from django.urls import path
from . import views  # import all views for this app


urlpatterns = [
    path('', views.main, name='main'),
    path('about/', views.about, name='main-about'),
    path('contact/', views.contact, name='main-contact'),
]
