from django import views
from django.contrib import admin
from django.urls import path, include
from quiz import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('quiz/', include('quiz.urls')),
]
