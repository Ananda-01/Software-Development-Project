from django.contrib import admin
from .models import TaskCategory

# Register your models here.
admin.site.register(TaskCategory)


from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.TaskModel)