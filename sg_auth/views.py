from rest_framework import generics, permissions, status
from rest_framework.response import Response
from knox.models import AuthToken

from sg_auth.serializers import RegisterUserSerializer, LoginUserSerializer, UserSerializer


class LoginAPIView(generics.GenericAPIView):
  serializer_class = LoginUserSerializer

  def post(self, request, *args, **kwargs):
      serializer = self.get_serializer(data=request.data)
      # returns default 400
      if not serializer.is_valid():
          return Response({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

      user = serializer.validated_data

      return Response({
          'user': UserSerializer(user, context=self.get_serializer_context()).data,
          'token': AuthToken.objects.create(user)[1]
      })

class RegistrationAPIView(generics.GenericAPIView):
    serializer_class = RegisterUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            return Response({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        user = serializer.save()

        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1]
        })

class GetUserAPIView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
