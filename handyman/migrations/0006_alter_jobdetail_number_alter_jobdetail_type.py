# Generated by Django 4.2 on 2023-05-28 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('handyman', '0005_jobdetail_image_url_jobdetail_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobdetail',
            name='number',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='jobdetail',
            name='type',
            field=models.CharField(max_length=20),
        ),
    ]