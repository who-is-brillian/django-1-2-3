from django.core.management.base import BaseCommand
from faker import Faker
from appOne.models import User
import random

class Command(BaseCommand):
    help = 'Generate Fake Data For User Model'

    def handle(self, *args, **kwargs):
        fake = Faker()
        
        num_records = 20
        
        for _ in range(num_records):
            name = fake.name()
            address = fake.address()
            email = fake.email()
            date = fake.date_of_birth()
            
            User.objects.create(
                name=name,
                address=address,
                email=email,
                date = date
            )
        self.stdout.write(self.style.SUCCESS(f"{num_records} fake datas success"))