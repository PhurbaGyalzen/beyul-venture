from blog.views import (
    CustomObtainTokenPairView,
    BlogView,
    UserViewSet,
    TagViewSet,
    CommentViewSet,
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

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', CustomObtainTokenPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
