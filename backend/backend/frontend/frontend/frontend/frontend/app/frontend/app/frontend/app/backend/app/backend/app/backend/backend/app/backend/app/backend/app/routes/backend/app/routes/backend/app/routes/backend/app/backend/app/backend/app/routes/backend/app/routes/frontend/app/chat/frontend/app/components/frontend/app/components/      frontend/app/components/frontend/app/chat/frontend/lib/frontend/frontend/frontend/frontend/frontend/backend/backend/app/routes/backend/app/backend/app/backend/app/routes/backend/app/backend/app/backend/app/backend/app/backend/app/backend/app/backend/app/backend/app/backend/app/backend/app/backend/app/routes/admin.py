from fastapi import APIRouter, Depends

from ..dependencies import get_current_user


router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)


@router.get("/dashboard")
async def dashboard(
    user=Depends(get_current_user)
):

    return {
        "panel": "Haya Building A Admin",
        "status": "active",
        "user": user
    }


@router.get("/system")
async def system_info(
    user=Depends(get_current_user)
):

    return {
        "project": "Haya Building A",
        "version": "1.0.0",
        "security": "enabled"
    }
