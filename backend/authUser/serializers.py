from django.contrib.auth import get_user_model
from rest_framework import serializers
User = get_user_model()
class Userserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =['id','email','password','first_name','middle_name','last_name','phone_number']
        extra_kwargs={'password':{'write_only':True}}

    def create(self,validated_data):
        # raise Exception(validated_data['email'])
        if User.objects.filter(email = validated_data['email']).first():
            return serializers.ValidationError('email already used')
        user = User.objects.create_user(**validated_data)
        return user
