from datetime import datetime, timezone
from django.db import models
from django.contrib.auth.models import User


STATUS = (
    (0, "Draft"),
    (1, "Publish")
)

class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    description = models.CharField(max_length=500, blank=True)
    # JSONField is supported on MariaDB 10.2.7+, MySQL 5.7.8+, Oracle,
    # PostgreSQL, and SQLite 3.9.0+ (with the JSON1 extension enabled).
    tags = models.CharField(max_length=100)  # use JSON?
    likes = models.PositiveIntegerField()
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    # update below field when publishing.
    updated_on = models.DateTimeField(auto_now=True)
    thumbnail = models.ImageField(
        upload_to="blog",
        blank=True,
        null=True
    )
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.IntegerField(choices=STATUS, default=0)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title
