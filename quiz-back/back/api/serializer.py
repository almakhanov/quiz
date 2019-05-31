from rest_framework import serializers
from api.models import Post


class PostSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    # user = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'
