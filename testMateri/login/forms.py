from django import forms
from django.core.exceptions import ValidationError
from appOne.models import User  # Pastikan ini mengarah ke model pengguna atau tabel yang menyimpan email

class Login(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField(max_length=200)
    password = forms.CharField(widget=forms.PasswordInput, min_length=8)

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise ValidationError("Email ini sudah terdaftar. Silakan gunakan email lain.")
        return email
