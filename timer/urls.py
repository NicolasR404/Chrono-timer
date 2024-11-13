from django.urls import path
from .views import HomePageView, ProfilPageView, TimerSettingPageView, TimerPageView

urlpatterns = [
    path('', HomePageView.as_view(), name ="home"),
    path('profil/', ProfilPageView.as_view(), name ="profil"),
    path('timer_setting/', TimerSettingPageView.as_view(), name ="timer_setting"),
    path('timer/', TimerPageView.as_view(), name ="timer"),
] 