from django.db import models
from django.contrib.auth.models import AbstractUser,UserManager
from random import randint
from django.contrib.auth.hashers import make_password

# Create your models here.


class customeUserManager(UserManager):
    def _create_user(self, email:str,password,username=None , **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if username is None:
            username = email.split("@")[0] + str(randint(0,999999))
        user = User(email=email,username = username,password = password,**extra_fields)
        user.password = make_password(password)
        user.save()
        return user

    def create_user(self, email,username=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email,username=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)
class User(AbstractUser):
    
    first_name = models.CharField(max_length=100) 
    middle_name = models.CharField(max_length=100,default='',null=True,blank=True)
    last_name = models.CharField(max_length=100)

    phone_number = models.CharField(max_length=10)
    email = models.EmailField(max_length=100,unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=[]
    objects = customeUserManager()
    