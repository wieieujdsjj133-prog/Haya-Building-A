from .database import Base, engine
from .logger import logger


def initialize_database():

    try:
        Base.metadata.create_all(
            bind=engine
        )

        logger.info(
            "Database initialized successfully"
        )

        return True

    except Exception as error:

        logger.error(
            f"Database initialization failed: {error}"
        )

        return False



def initialize_system():

    logger.info(
        "Starting Haya Building A system"
    )

    database_status = initialize_database()

    return {
        "system": "Haya Building A",
        "database": database_status,
        "status": "ready"
  }
