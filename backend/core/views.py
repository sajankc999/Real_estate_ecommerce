from django.shortcuts import render
from .models import *
from django.contrib.auth import get_user_model
from rest_framework.viewsets import generics,ModelViewSet
from .serilaizers import *
from rest_framework.permissions import AllowAny,IsAuthenticated
from .Permissions import *
from rest_framework import filters,status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response


class PropertyView(generics.ListAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes =[IsAuthenticated]
    filter_backends =[filters.SearchFilter,filters.OrderingFilter]
    parser_classes = (MultiPartParser, FormParser)
    
    search_fields = ['price', 'title']
    ordering_fields = ['price', 'title']

  
class PropertyDeleteView(generics.DestroyAPIView)  :
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        return Property.objects.filter(seller=self.request.user)
    

class PropertyUserView(ModelViewSet):
    # queryset = Property.objects.all()
    lookup_field='slug'
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticated,]
    parser_classes = (MultiPartParser, FormParser)
    def get_queryset(self):
        return Property.objects.filter(seller = self.request.user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(seller = self.request.user)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def perform_update(self, serializer):
        return serializer.save()