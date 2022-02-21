from django.urls import path
from django.views import View
from django.urls import path

from . import views

urlpatterns = [
    path('', views.quiz_list),
    path('1/' ,views.quiz1),

]
