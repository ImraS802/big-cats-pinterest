# Generated by Django 4.1.4 on 2022-12-08 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bigcat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('species', models.CharField(max_length=50)),
                ('food', models.CharField(max_length=20)),
                ('image', models.CharField(max_length=200)),
            ],
        ),
    ]
