from django.shortcuts import render

def index(request):
    return render(request, 'sg_web/index.html')
