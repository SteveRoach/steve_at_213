from django.urls import path
from . import views  # import all views for this app


urlpatterns = [
    path('', views.handyman, name='Handyman'),
    path('get_jobs_grid', views.get_jobs_grid, name='Get Jobs Grid'),
]
