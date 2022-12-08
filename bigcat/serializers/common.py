from rest_framework import serializers
from ..models import Bigcat

class BigcatSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Bigcat
        fields = '__all__'
