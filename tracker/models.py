from django.db import models

class Subject(models.Model):
    name = models.CharField(max_length=100)
    total_classes = models.IntegerField()
    completed_classes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def progress_percentage(self):
        if self.total_classes == 0:
            return 0
        return int((self.completed_classes / self.total_classes) * 100)

    def __str__(self):
        return self.name