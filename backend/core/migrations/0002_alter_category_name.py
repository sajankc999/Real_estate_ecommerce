# Generated by Django 4.2.11 on 2024-06-19 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(choices=[('Residential', 'Residential'), ('Commercial', 'Commmercial'), ('Industrial', 'Industrial'), ('Land', 'Land'), ('Governmental', 'governmental')], default='Land', max_length=100),
        ),
    ]