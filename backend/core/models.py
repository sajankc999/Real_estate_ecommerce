from typing import Iterable
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 
from django.contrib.auth import get_user_model
from .slug import unique_slugify
from django.template.defaultfilters import slugify
User = get_user_model()
# Create your models here.


class Category(models.Model):
    Residential = 'Residential'
    Commercial ='Commercial'
    Industrial ='Industrial'
    Land='Land'
    Governmental='Governmental'
    choices_option = ((Residential,'Residential'),
                      (Commercial,'Commmercial'),
                      (Industrial,'Industrial'),
                      (Land,'Land'),
                      (Governmental,'governmental'))
    name = models.CharField(max_length=100,default=Land,choices=choices_option)
    

    def __str__(self) -> str:
        return self.name
    
    
class Property(models.Model):
    title = models.CharField(max_length=100,null=True,blank=True,default='')
    slug = models.SlugField(max_length=50,unique=True)
    description = models.TextField()
    price = models.PositiveIntegerField()
    is_negotiable = models.BooleanField(default=True)
    image =models.ImageField(upload_to='images/property/',null=True,blank=True)
    location = models.CharField(max_length=150)
    seller = models.ForeignKey(User,on_delete=models.CASCADE)
    is_available = models.BooleanField(default=True)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)

    def save(self,**kwargs) -> None:
        slug = '%s' % (self.title)
        unique_slugify(self, slug)
        super(Property, self).save()