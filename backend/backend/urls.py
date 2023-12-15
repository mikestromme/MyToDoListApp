from django.contrib import admin
from django.urls import path, include
urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include('todolist.urls')) # your app name here from step 2c(i) above
]
