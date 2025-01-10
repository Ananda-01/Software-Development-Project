from django import forms
from .models import TaskCategory

class CategoryForm(forms.ModelForm):
    class Meta:
        model = TaskCategory
        fields = '__all__'


from django import forms
from .models import TaskModel

class TaskForm(forms.ModelForm):
    class Meta:
        model = TaskModel
        fields = ['task_title', 'task_description', 'categories', 'is_completed']