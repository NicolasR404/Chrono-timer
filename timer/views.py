# from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
# from django

class HomePageView(TemplateView):
    template_name = "home.html"

class ProfilPageView(TemplateView):
    template_name = "profil.html"

class TimerSettingPageView(TemplateView):
    template_name = "timer_setting.html"

class TimerPageView(TemplateView):
    template_name = "timer.html"
