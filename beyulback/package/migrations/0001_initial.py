# Generated by Django 3.2.4 on 2021-08-12 13:46

import ckeditor_uploader.fields
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Package',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Enter your package name here.', max_length=200, unique=True, verbose_name='name')),
                ('slug', models.SlugField(blank=True, help_text='package name will be default slug if you leave it blank', unique=True, verbose_name='slug')),
                ('description', models.CharField(blank=True, help_text='Write a short description about your post', max_length=500, verbose_name='Descripiton')),
                ('content', ckeditor_uploader.fields.RichTextUploadingField(blank=True, help_text='Put your actual content here.', null=True, verbose_name='content')),
                ('created_on', models.DateTimeField(auto_now_add=True, verbose_name='create on')),
                ('updated_on', models.DateTimeField(auto_now=True, verbose_name='update_on')),
                ('thumbnail', models.ImageField(blank=True, help_text='Insert a thumbnail for your package.', null=True, upload_to='package', verbose_name='thumbnail')),
                ('compress_thumbnail', models.BooleanField(default=False, help_text='checking this field will enable compression in thumbnail image.', verbose_name='compress thumbnail')),
                ('best_season', models.CharField(help_text='what is the best season for this package?', max_length=50, verbose_name='Best Season')),
                ('transportation', models.CharField(help_text='what are the means of transportation?', max_length=100, verbose_name='Transportation')),
                ('starts_at', models.CharField(help_text='From where does the journey starts?', max_length=50, verbose_name='Starts at')),
                ('ends_at', models.CharField(help_text='Where does the journey ends?', max_length=50, verbose_name='Ends at')),
                ('age_requirement', models.CharField(help_text='Enter the required age', max_length=50, verbose_name='Age Requirement')),
                ('min_people', models.PositiveSmallIntegerField(default=1, help_text='Enter the minimum number of people who can join the package', validators=[django.core.validators.MinValueValidator(1)], verbose_name='Minimum People')),
                ('max_people', models.PositiveSmallIntegerField(help_text='Enter the maximum number of people who can join the package', verbose_name='Maximum People')),
                ('meals', models.CharField(help_text='Meal option', max_length=255, verbose_name='Meals')),
                ('price', models.IntegerField(help_text='enter the package price', verbose_name='price')),
                ('altitude', models.DecimalField(decimal_places=2, help_text='Enter the altitude of the location.', max_digits=6, verbose_name='Altitude')),
                ('difficulty_level', models.CharField(choices=[('Easy', 'Easy'), ('Medium', 'Medium'), ('Hard', 'Hard')], default='easy', help_text='choose the difficulty level', max_length=50, verbose_name='difficulty level')),
                ('duration', models.SmallIntegerField(default=1, help_text='Enter package duration in days', verbose_name='duration')),
            ],
            options={
                'ordering': ['-created_on'],
            },
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='insert your title here', max_length=255, verbose_name='title')),
                ('body', models.TextField()),
                ('created_on', models.DateTimeField(auto_now_add=True, verbose_name='create on')),
                ('updated_on', models.DateTimeField(auto_now=True, verbose_name='update_on')),
                ('rating', models.PositiveBigIntegerField(default=1, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('reviewed_package', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='package.package')),
            ],
        ),
    ]
