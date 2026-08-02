from fastapi import Depends, HTTPException, Header

from .auth import verify_token


async def get_current_user(
    authorization: str = Header(None)
):

    if not authorization:
        raise HTTPException(
            status_code=401,
            detail="Authorization token required"
        )


    parts = authorization.split(" ")

    if len(parts) != 2:
        raise HTTPException(
            status_code=401,
            detail="Invalid authorization format"
        )


    token = parts[1]

    payload = verify_token(token)


    if not payload:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token"
        )


    return payload
