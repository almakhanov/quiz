from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=300)
    body = models.TextField()
    like_count = models.IntegerField(default=0)
    created_at = models.DateTimeField('Created', auto_now_add=True, null=False)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')

    def __str__(self):
        return '{}: {}'.format(self.id, self.title)

    def to_json(self):
        return {
            'title': self.title,
            'body': self.body,
            'like_count': self.like_count,
            'created_at': self.created_at
        }
