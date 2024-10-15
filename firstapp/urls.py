from django.urls import path
from . import views
from .views import receive_data

urlpatterns = [
    path('',views.index),
    path('receive-data/', receive_data, name='receive_data'),
]