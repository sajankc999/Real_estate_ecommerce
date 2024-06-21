from django.contrib import admin

from .models import *


class PropertyAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
admin.site.register(Property,PropertyAdmin)


admin.site.register(Category)