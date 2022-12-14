from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Bigcat
from .serializers.common import BigcatSerializer
from .serializers.populated import PopulatedBigcatSerializer

# Create your views here

class BigcatListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):     #get all bigcats
        bigcats = Bigcat.objects.all()
        serialized_bigcat_list = PopulatedBigcatSerializer(bigcats, many=True)

        return Response(serialized_bigcat_list.data, status=status.HTTP_200_OK)

    def post(self, request):      #create a new bigcat
        request.data['owner'] = request.user.id
        bigcat_to_create = BigcatSerializer(data=request.data)
        if bigcat_to_create.is_valid():
            bigcat_to_create.save()
            return Response(bigcat_to_create.data, status=status.HTTP_201_CREATED)
        print(bigcat_to_create.errors)
        return Response (bigcat_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class BigcatDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_bigcat(self, pk):
        try:      #django try catch, returns a bigcat that exists, if not it returns not found
            return Bigcat.objects.get(pk=pk)
        except Bigcat.DoesNotExist:
            raise NotFound()

    def is_bigcat_owner(self, bigcat, user):
        if bigcat.owner.id != user.id:
            raise PermissionDenied()

    def get(self, _request, pk):
        bigcat = self.get_bigcat(pk=pk)     #get single bigcat
        serialized_bigcat = PopulatedBigcatSerializer(bigcat)

        return Response(serialized_bigcat.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        bigcat_to_update = self.get_bigcat(pk=pk)     #update bigcat
        self.is_bigcat_owner(bigcat_to_update, request.user)
        updated_bigcat = BigcatSerializer(bigcat_to_update, data=request.data)
        if updated_bigcat.is_valid():
            updated_bigcat.save()
            return Response(updated_bigcat.data, status=status.HTTP_202_ACCEPTED)
        print(updated_bigcat.errors)
        return Response(updated_bigcat.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):     #delete bigcat
        bigcat_to_delete = self.get_bigcat(pk=pk)
        self.is_bigcat_owner(bigcat_to_delete, request.user)
        bigcat_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
