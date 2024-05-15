from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Property



class PropertySerializer(serializers.ModelSerializer):
    seller = serializers.HiddenField(default = serializers.CurrentUserDefault())
    image = serializers.ImageField(required=False)
    class Meta:
        model = Property
        fields =['id','title','description','price','image','location','is_negotiable','is_available','seller']
        # extra_kwargs ={'seller':{'read_only':True}}
        