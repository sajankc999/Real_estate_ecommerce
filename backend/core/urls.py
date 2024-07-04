from django.urls import path
from .views import *
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('property/MyProperty',PropertyUserView,basename='dashboard')
urlpatterns = [
    path('property/',PropertyView.as_view(),name='property'),
    path('property/MyProperty/delete/<slug:slug>/',PropertyDeleteView.as_view(),name='property-delete'),
    # path('property/MyProperty/',PropertyUserView.as_view(),name='dashboard'),
]+router.urls
