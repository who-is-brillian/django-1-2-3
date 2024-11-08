from django.shortcuts import render
from .forms import Login
# Create your views here.

def loginForm(request):
    form = Login()
    return render (request, "login.html", {"form" : form})