from django.contrib import admin
from django.urls import path, include
from .views import contact
from .views import home
urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact/',contact),
    path("first_app/",include("first_app.urls")),
    path("",home)
]
