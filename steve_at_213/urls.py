from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('handyman/', include('handyman.urls')),
    path('upcycle/', include('upcycle.urls')),
    path('special/', include('special.urls')),
]
