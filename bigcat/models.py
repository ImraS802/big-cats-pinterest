from django.db import models

# Create your models here.
class Bigcat(models.Model):
    name = models.CharField(max_length=50)
    species = models.CharField(max_length=50)
    food = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    habitat = models.ForeignKey(
        'habitats.Habitat',
        related_name="habitat",
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="created_bigcats",
        on_delete=models.CASCADE
    )
      
    def __str__(self):
        return f'{self.name} - {self.species}'
