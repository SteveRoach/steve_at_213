from django.urls import path
from . import views  # import all views for this app


urlpatterns = [
    path('', views.main, name='Main'),
    path('about', views.about, name='About'),
    path('contact', views.contact, name='Contact'),
]
