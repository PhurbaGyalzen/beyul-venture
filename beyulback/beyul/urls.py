from blog.views import (
    CustomObtainTokenPairView,
    BlogView,
    TagViewSet,
    CommentViewSet,
    ClapViewSet,
)

from users.views import(
    UserViewSet
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

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', CustomObtainTokenPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('ckeditor/', include('ckeditor_uploader.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Debug toolbar only used while in development stage
if settings.DEBUG:
    import debug_toolbar
    urlpatterns += path('__debug__/', include(debug_toolbar.urls)),
