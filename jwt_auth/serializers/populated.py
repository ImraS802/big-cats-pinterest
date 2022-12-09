from bigcat.serializers.common import BigcatSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):
    created_bigcats = BigcatSerializer(many=True)
