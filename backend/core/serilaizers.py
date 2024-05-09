from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Property



class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields ='__all__'
        extra_kwargs ={'seller':{'read_only':True}}
        