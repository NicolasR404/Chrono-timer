from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import InscriptionForm

# Create your views here.
def inscription(request):
    if request.method == 'POST':
        form = InscriptionForm(request.POST)
        if form.is_valid():
            utilisateur = form.save()
            login(request, utilisateur) # Connextion auto après inscription
            return redirect('home') # Peut etre a remplacer vers redirect chrono
        
        else:
            form = InscriptionForm()
        return render(request, 'utilisateur/inscription.html', {'form':form})