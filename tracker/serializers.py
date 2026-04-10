from rest_framework import serializers
from .models import Subject

class SubjectSerializer(serializers.ModelSerializer):
    progress = serializers.SerializerMethodField()

    class Meta:
        model = Subject
        fields = '__all__'

    def get_progress(self, obj):
        return obj.progress_percentage()