from django.db import models

# Create your models here.
class user(models.Model):
    user_name = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    birthyear = models.IntegerField()

    def __str__(self):
        return (f"Id:{self.id}, name:{self.user_name},password:{self.password},birthyear:{self.birthyear}")
    


class user_details(models.Model):
    user_name = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    mail = models.CharField(max_length=30)

    def __str__(self):
        return (f"Id:{self.id}, name:{self.user_name},password:{self.password},mail:{self.mail}")