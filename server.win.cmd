@echo off
start cmd /c redis-server
activate && python beyulback\manage.py runserver