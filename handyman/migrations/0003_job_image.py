# Generated by Django 4.2 on 2023-05-21 11:18

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('handyman', '0002_remove_job_thumbnail_url_job_display_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='image',
            field=cloudinary.models.CloudinaryField(max_length=255, null=True, verbose_name='image'),
        ),
    ]
