# beyul-venture

## Steps to run Beyulback

1. Pull the main branch

2. Install dependencies from requirements.txt file

   ```
   > pip install -r requirements.txt
   ```

3. Install the latest version of Redis by following this [tutorial](https://www.youtube.com/watch?v=1psWME8UH_0 "redis installation tutorial").

4. After setting up Redis, open a linux terminal and start redis server in background

   ```
   $ redis-server
   ```

5. Finally, run the Django development server in a new shell

   ```
   > python manage.py runserver
   ```

> Note: The Redis server must be running in the background

## To access Beyul Admin Dashboard:

Go to Django admin url and fill in the given data

> Email: admin@gmail.com

> Password: admin
