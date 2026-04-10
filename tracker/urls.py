from django.urls import path, include
from .views import index
from rest_framework.routers import DefaultRouter
from .views import SubjectViewSet

router = DefaultRouter()
router.register(r'subjects', SubjectViewSet)

urlpatterns = [
    path('', index),              # 👈 frontend page
    path('api/', include(router.urls)),  # 👈 APIs
]