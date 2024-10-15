from django.shortcuts import render
from .models import user
from .models import user_details
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie
import json


#from django.shortcuts import HttpResponse

# Create your views here.

def index(request):
    #return HttpResponse("First app")
    users = list(user_details.objects.values())
    checking = {'users':users}
    #return JsonResponse(request,'user/start.html',checking)
    return JsonResponse(users,safe=False)


'''def index(request):
    #return HttpResponse("First app")
    users = user.objects.values()
    checking = {'users':users}
    return render(request,'user/start.html',checking)'''

@csrf_exempt
def receive_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        uname = data.get('name')
        pword = data.get('pass')
        mail = data.get('mail')
        userdata = user_details(user_name=uname,password=pword, mail = mail)
        userdata.save()
        #print(f"uname: {uname}, pword: {pword}, byear: {byear}")
        return JsonResponse({'message': 'Data received successfully!'})
    return JsonResponse({'error': 'Invalid request method'}, status=400)