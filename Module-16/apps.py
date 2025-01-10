from django.apps import AppConfig


class CategoryConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'category'


from django.apps import AppConfig


class TaskConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'task'