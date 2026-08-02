from .database import Base, engine
from .logger import logger


def create_tables():

    try:

        Base.metadata.create_all(
            bind=engine
        )

        logger.info(
            "Database tables created successfully"
        )

        return {
            "status": "success",
            "message": "Database ready"
        }


    except Exception as error:

        logger.error(
            f"Database error: {error}"
        )

        return {
            "status": "failed",
            "error": str(error)
        }
