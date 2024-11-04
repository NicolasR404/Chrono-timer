from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView

class HomePageView (TemplateView):
    template_name = "Home.html"

class ProfilPageView (TemplateView):
    template_name = "Profil.html"

class TimerSettingPageView (TemplateView):
    template_name = "TimerSetting.html"

class TimerPageView (TemplateView):
    template_name = "Timer.html"
