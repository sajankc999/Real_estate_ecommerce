from django.shortcuts import render
from .serializers import *
from django.contrib.auth import get_user_model
from rest_framework.viewsets import generics
from rest_framework.permissions import AllowAny
# Create your views here.
User = get_user_model()
class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = Userserializer
    permission_classes = [AllowAny]