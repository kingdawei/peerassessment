# Generated by Django 3.0.4 on 2020-04-21 01:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peer_assessment', '0005_auto_20200420_2139'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='semester',
            field=models.CharField(choices=[('1', 1), ('2', 2), ('3', 3)], max_length=1),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(default='72724118', max_length=100),
        ),
    ]
