from habitats.serializers.common import HabitatSerializer
from jwt_auth.serializers.nested import NestedUserSerializer
from .common import BigcatSerializer

class PopulatedBigcatSerializer(BigcatSerializer):
    habitat = HabitatSerializer()
    owner = NestedUserSerializer()
