# Generated by Django 4.1.4 on 2022-12-08 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bigcat', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bigcat',
            name='food',
            field=models.CharField(max_length=200),
        ),
    ]