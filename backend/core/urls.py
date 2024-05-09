from django.urls import path
from .views import *

urlpatterns = [
    path('property/',PropertyView.as_view(),name='property'),
    path('property/MyProperty/delete/<int:pk>/',PropertyDeleteView.as_view(),name='property-delete'),
    path('property/MyProperty/',PropertyUserView.as_view(),name='dashboard'),
]
