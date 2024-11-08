from django.db import models

# Create your models here.

class Customer(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    
    def __str__(self):
        return self.firstName