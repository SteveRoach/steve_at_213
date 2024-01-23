from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('', include('main.urls')),
    path('handyman/', include('handyman.urls')),
    path('special/', include('special.urls')),
]
