from cloudinary.models import CloudinaryField
from django.db import models


class Job(models.Model):
    title = models.CharField(max_length=100)
    image = CloudinaryField('image', null=True)
    display_order = models.IntegerField(null=True)


class JobDetail(models.Model):
    number = models.IntegerField(null=False)
    type = models.CharField(max_length=20, null=False)
    text = models.TextField(null=True)
    image_url = CloudinaryField('image', null=True)
    image_width = models.IntegerField(null=True)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)

