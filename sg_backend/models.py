from django.db import models
from django.contrib.auth.models import User


class Categories(models.Model):
    category_name = models.CharField(max_length=100, help_text="Name this category.")
    category_desc = models.CharField(max_length=255, blank=True, help_text="Can be blank.")
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ('category_name', )

    def __str__(self):
        return ('category_id: %d, category_name: %s') % (self.id, self.category_name)


class Topics(models.Model):
    topic_name = models.CharField(max_length=100, help_text="Name this topic.")
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)

    class Meta:
        ordering = ('topic_name', )

    def __str__(self):
        return ('topic id: %d, topic_name: %s from category id: %d') % (self.id, self.topic_name, self.category)


class Notes(models.Model):
    topic = models.ForeignKey(Topics, on_delete=models.CASCADE)
    key = models.CharField(max_length=100)
    value = models.CharField(max_length=100)

    def __str__(self):
        return ('note id: %d, key: %s, value: %s') % (self.id, self.key, self.value)
