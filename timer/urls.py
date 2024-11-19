from django.urls import path
from .views import HomePageView, InscriptionPageView, ProfilPageView, TimerSettingPageView, TimerPageView

urlpatterns = [
    path('', HomePageView.as_view(), name ="home"),
    path('inscription/', InscriptionPageView.as_view(), name ="inscription"),
    path('profil/', ProfilPageView.as_view(), name ="profil"),
    path('timer_setting/', TimerSettingPageView.as_view(), name ="timer_setting"),
    path('timer/', TimerPageView.as_view(), name ="timer"),
] 