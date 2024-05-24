from fastapi import APIRouter

from app.api.routes import topics

api_router = APIRouter()
api_router.include_router(topics.router, prefix="/topics", tags=["topics"])
