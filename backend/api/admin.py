from django.contrib import admin
from api.models import Profile, User
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ['username','email']

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['full_name', 'user', 'verified']

admin.site.register(User,UserAdmin)
admin.site.register(Profile, ProfileAdmin)