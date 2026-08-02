from fastapi import APIRouter
from datetime import datetime

from ..schemas import UserCreate, UserResponse


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


# مؤقتًا للتجربة
# سيتم ربطه لاحقًا بقاعدة البيانات

users = []


@router.post("/register", response_model=UserResponse)
async def register_user(
    user: UserCreate
):
    new_user = {
        "id": len(users) + 1,
        "username": user.username,
        "email": user.email,
        "created_at": datetime.utcnow()
    }

    users.append(new_user)

    return new_user


@router.get("/")
async def get_users():
    return {
        "users": users
    }
