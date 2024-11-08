from django.shortcuts import render, redirect
from .forms import CustomerForm

# Membuat views di sini.

def subscribe(request):
    if request.method == "POST":
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')
        else:
            pass
    else:
        form = CustomerForm()
    return render(request, 'subscribe.html', {'form': form})

def success(request):
    return render(request, 'success.html')
