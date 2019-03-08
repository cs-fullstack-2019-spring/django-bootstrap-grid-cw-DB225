from django.shortcuts import render


# Create your views here.

# function for the main page
def index(request):
    return render(request, 'bootApp/index.html')


# function for page1
def page1(request):
    return render(request, 'bootApp/page1.html')


# function for page2
def page2(request):
    return render(request, 'bootApp/page2.html')
