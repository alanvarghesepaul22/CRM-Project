from django.shortcuts import render
from .models import User, Record

# Create your views here.

from .serializers import MyTOPS, RegistrationSerializer, RecordSerializer
from django.shortcuts import render, get_object_or_404

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.urls import reverse_lazy
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from django.views.generic.edit import CreateView, UpdateView, DeleteView


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTOPS


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def protectedView(request):
    output = f"Welcome {request.user}, Authentication SUccessful"
    return Response({"response": output}, status=status.HTTP_200_OK)


@api_view(["GET"])
def view_all_routes(request):
    data = ["api/token/refresh/", "api/register/", "api/token/"]

    return Response(data)


class RecordListCreateAPIView(generics.ListCreateAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer

class RecordRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer