from django.db import models


class Job(models.Model):
    title = models.CharField(max_length=100)
    thumbnail_url = models.CharField(max_length=500, null=True)


"""
class JobDetailLine(models.Model):
    number = models.IntegerField
    type = models.CharField(max_length=20)
    text = models.TextField(null=True)
    image_url = models.Field
"""
