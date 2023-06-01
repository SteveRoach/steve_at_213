from django.urls import path
from . import views  # import all views for this app


urlpatterns = [
    path('', views.upcycle, name='Upcycle'),
]
