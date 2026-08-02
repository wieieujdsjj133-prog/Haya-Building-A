from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from datetime import datetime

from .logger import logger


class RequestLoggerMiddleware(
    BaseHTTPMiddleware
):

    async def dispatch(
        self,
        request: Request,
        call_next
    ):

        start_time = datetime.utcnow()

        response = await call_next(
            request
        )

        duration = (
            datetime.utcnow()
            - start_time
        ).total_seconds()


        logger.info(
            f"{request.method} "
            f"{request.url.path} "
            f"{response.status_code} "
            f"{duration}s"
        )


        return response
