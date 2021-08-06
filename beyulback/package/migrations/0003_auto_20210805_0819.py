# Generated by Django 3.2.4 on 2021-08-05 02:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('package', '0002_alter_package_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='package',
            name='difficulty_level',
            field=models.CharField(choices=[('easy', 'easy'), ('medium', 'medium'), ('hard', 'hard')], default='easy', help_text='choose the difficulty level', max_length=50, verbose_name='difficulty level'),
        ),
        migrations.AddField(
            model_name='package',
            name='duration',
            field=models.SmallIntegerField(default=1, help_text='Enter package duration in days', verbose_name='duration'),
        ),
    ]
