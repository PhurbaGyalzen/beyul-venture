from django.contrib import admin

from blog.views import (
    CustomObtainTokenPairView,
    BlogView,
    TagViewSet,
    CommentViewSet,
    ClapViewSet,
)

from users.views import(
    UserViewSet,
    RegistrationAPIView,
)

from package.views import (
    PackageView,
    ReviewView,
    PhotoView,
)
from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'blog', BlogView)
router.register(r'user', UserViewSet)
router.register(r'tag', TagViewSet)
router.register(r'comment', CommentViewSet)
router.register(r'clap', ClapViewSet)
router.register(r'package', PackageView)
router.register(r'review', ReviewView)
router.register(r'photo', PhotoView)

urlpatterns = [
    path('jet/', include('jet.urls', 'jet')),
    path('jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # use this .../api/login/ to get access tokens
    path('api/login/', CustomObtainTokenPairView.as_view(),
         name='login'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # register new users using .../api/register/ endpoint
    path('api/register/', RegistrationAPIView.as_view(), name='register'),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('payment/', include('payment.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Debug toolbar only used while in development stage
if settings.DEBUG:
    import debug_toolbar
    urlpatterns += path('__debug__/', include(debug_toolbar.urls)),

admin.site.site_url = 'http://localhost:3000/'
