import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'steve_at_213.settings')

application = get_wsgi_application()
