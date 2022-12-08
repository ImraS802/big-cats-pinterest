from habitats.serializers.common import HabitatSerializer
from ..serializers.common import BigcatSerializer
#from jwt_auth.serializers.nested import NestedUserSerializer

class PopulatedBigcatSerializer(BigcatSerializer):
    habitat = HabitatSerializer()
    owner = NestedUserSerializer()
