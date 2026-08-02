from fastapi import APIRouter
from datetime import timedelta

from ..auth import (
    hash_password,
    create_access_token
)

from ..schemas import UserCreate


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


# مؤقتًا للتجربة
users_db = []


@router.post("/register")
async def register(
    user: UserCreate
):

    hashed_password = hash_password(
        user.password
    )

    new_user = {
        "id": len(users_db) + 1,
        "username": user.username,
        "email": user.email,
        "password": hashed_password
    }

    users_db.append(new_user)

    return {
        "message": "User created successfully",
        "user": {
            "username": user.username,
            "email": user.email
        }
    }


@router.post("/login")
async def login(
    username: str,
    password: str
):

    for user in users_db:

        if user["username"] == username:

            token = create_access_token(
                {
                    "sub": username
                }
            )

            return {
                "access_token": token,
                "token_type": "bearer"
            }


    return {
        "error": "Invalid credentials"
  }
