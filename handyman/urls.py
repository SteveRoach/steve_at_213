from django.urls import path
from . import views  # import all views for this app


urlpatterns = [
    path('', views.handyman, name='handyman'),
    path('get_jobs_grid', views.get_jobs_grid, name='handyman-get-jobs-grid'),
    path('job/<int:job_id>', views.job, name='handyman-job'),
    path('get_job/<int:job_id>', views.get_job, name='handyman-get-job'),
]
