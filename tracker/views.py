

# Create your views here.
from rest_framework import viewsets
from .models import Subject
from .serializers import SubjectSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all().order_by('-created_at')
    serializer_class = SubjectSerializer


from django.shortcuts import render

def index(request):
    return render(request, 'index.html')    