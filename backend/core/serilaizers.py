from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import *



class PropertySerializer(serializers.ModelSerializer):
    seller = serializers.HiddenField(default = serializers.CurrentUserDefault())
    image = serializers.ImageField(required=False)
    class Meta:
        model = Property
        fields =['id','title','description','price','image','location','is_negotiable','is_available','seller','category']
        # lookup_field = 'slug'
        # extra_kwargs ={'slug':{'read_only':True}}
        
