from fastapi import APIRouter

from ..config import settings


router = APIRouter(
    prefix="/settings",
    tags=["Settings"]
)


@router.get("/")
async def get_settings():

    return {
        "app_name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "environment": settings.APP_ENV,
        "debug": settings.APP_DEBUG
    }


@router.get("/ai")
async def ai_settings():

    return {
        "ai_system": "Haya Building A AI",
        "status": "ready",
        "features": [
            "chat",
            "memory",
            "file analysis",
            "plugins"
        ]
    }
