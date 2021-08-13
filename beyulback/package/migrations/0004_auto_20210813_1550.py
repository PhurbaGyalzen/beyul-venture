# Generated by Django 3.2.4 on 2021-08-13 10:05

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('package', '0003_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='package',
            name='difficulty_level',
            field=models.CharField(choices=[('😄 Easy', '😄 Easy'), ('😐 Medium', '😐 Medium'), ('⚒️ Hard', '⚒️ Hard')], default='easy', help_text='choose the difficulty level', max_length=50, verbose_name='difficulty level'),
        ),
        migrations.CreateModel(
            name='Itinerary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.PositiveSmallIntegerField(help_text='Enter the day', validators=[django.core.validators.MinValueValidator(1)], verbose_name='Day')),
                ('title', models.CharField(help_text='Enter the title', max_length=255, verbose_name='Title')),
                ('description', models.TextField(help_text='Write a short description', verbose_name='Description')),
                ('package', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='package.package')),
            ],
            options={
                'ordering': ['package', 'day'],
                'unique_together': {('package', 'day')},
            },
        ),
    ]