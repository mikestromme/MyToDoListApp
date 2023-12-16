from django.db import models

class Todo(models.Model): 
    todo = models.CharField(unique=True, max_length=100)
    status = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
