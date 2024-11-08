from django.views.generic import TemplateView
from .models import User

class HomePageView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["first_name"] = "Brillian"
        context["last_name"] = "Okee"
        context["users"] = User.objects.order_by('date')  # Menambahkan data users ke context
        return context
