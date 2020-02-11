from rest_framework import generics
from rest_framework.response import Response
from knox.models import AuthToken

from sg_auth.serializers import RegisterUserSerializer, LoginUserSerializer, UserSerializer


class LoginView(generics.GenericAPIView):
  serializer_class = LoginUserSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    user = serializer.validated_data

    return Response({
        'user': UserSerializer(user, context=self.get_serializer_context()).data,
        'token': AuthToken.objects.create(user)[1]
    })

class RegistrationView(generics.GenericAPIView):
    serializer_class = RegisterUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1]
        })
