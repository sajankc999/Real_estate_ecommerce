from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.
class Property(models.Model):
    title = models.CharField(max_length=100,null=True,blank=True,default='')
    description = models.TextField()
    price = models.PositiveIntegerField()
    image = models.ImageField(upload_to='images/property/',null=True,blank=True)
    is_negotiable = models.BooleanField(default=True)
    location = models.CharField(max_length=150)
    seller = models.ForeignKey(User,on_delete=models.CASCADE)
    is_available = models.BooleanField(default=True)