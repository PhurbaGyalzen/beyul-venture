from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import Group

admin.site.unregister(Group)


class CustomUserAdmin(UserAdmin):
    """
    Customized Admin panel according to the CustomUser. 
    User can perform CRUD operation from admin panel for user profile, blog and other informations.
    """
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ('email', 'first_name', 'last_name', 'is_staff',
                    'is_staff', 'is_active',)
    list_filter = ('email', 'first_name', 'is_staff', 'is_staff', 'is_active',)
    # fieldsets are shown in admin form while updating existing users
    fieldsets = (
        (None, {'fields': ('email', 'first_name',
         'last_name', 'profile_pic', 'password')}),
        (_('Advance Permissions'), {
            'classes': ('collapse',),
            'fields': ('is_superuser', 'is_staff', 'is_active')
        }),
    )
    # add_fieldsets are shown in admin form while creating a new user
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('first_name', 'last_name', 'email',  'password1', 'password2', 'profile_pic')
        }),
        (_("More Permission"), {
            'classes': ('collapse',),
            'fields': ('is_superuser', 'is_staff')
        }),
    )
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.site_header = "Beyul Ventures Admin Dashboard"
admin.site.site_title = "Beyul Ventures Admin"
admin.site.index_title = "Welcome to Beyul Ventures Admin Dashboard"
