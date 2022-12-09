from django.urls import path
from .views import BigcatListView, BigcatDetailView

urlpatterns = [
    path('', BigcatListView.as_view()),
    path('<int:pk>/', BigcatDetailView.as_view())
]
