from django.shortcuts import render

# Create your views here.
from .models import *
from django.contrib.auth import get_user_model
from rest_framework.viewsets import generics
from .serilaizers import *
from rest_framework.permissions import AllowAny,IsAuthenticated
from .Permissions import *
from rest_framework import filters



class PropertyView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes =[IsAuthenticated]
    filter_backends =[filters.SearchFilter,filters.OrderingFilter]

    search_fields = ['price', 'title']
    ordering_fields = ['price', 'title']

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(seller = self.request.user)
        else:
            print(serializer.errors)

class PropertyDeleteView(generics.DestroyAPIView)  :
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        return Property.objects.filter(seller=self.request.user)
    

class PropertyUserView(generics.ListCreateAPIView):
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        return Property.objects.filter(seller = self.request.user)