from django.urls import path
from api import views

urlpatterns = [
    path('posts', views.PostCBV.as_view()),
    path('posts/<int:pk>', views.PostById.as_view()),
    path('posts/<int:pk>/like', views.PostByIdLikeCBV.as_view()),
    # path('login', views.UserCBV.as_view()),
    # path('logout', views.UserCBV.as_view())
]
