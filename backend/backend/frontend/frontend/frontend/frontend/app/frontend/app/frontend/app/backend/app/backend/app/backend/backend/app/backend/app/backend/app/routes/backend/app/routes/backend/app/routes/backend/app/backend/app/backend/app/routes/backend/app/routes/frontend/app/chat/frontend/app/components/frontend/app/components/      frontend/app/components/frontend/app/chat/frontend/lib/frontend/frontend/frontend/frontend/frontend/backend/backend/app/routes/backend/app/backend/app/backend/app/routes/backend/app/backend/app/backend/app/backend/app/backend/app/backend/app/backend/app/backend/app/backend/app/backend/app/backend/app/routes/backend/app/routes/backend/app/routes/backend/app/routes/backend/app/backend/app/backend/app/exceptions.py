from fastapi import Request
from fastapi.responses import JSONResponse

from .logger import logger


class HayaException(Exception):

    def __init__(
        self,
        message: str,
        code: str = "GENERAL_ERROR"
    ):
        self.message = message
        self.code = code

        super().__init__(
            self.message
        )



async def haya_exception_handler(
    request: Request,
    exc: HayaException
):

    logger.error(
        f"{exc.code}: {exc.message}"
    )

    return JSONResponse(
        status_code=400,
        content={
            "error": exc.code,
            "message": exc.message
        }
    )
