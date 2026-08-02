import logging
import os
from datetime import datetime


LOG_DIR = "logs"

os.makedirs(
    LOG_DIR,
    exist_ok=True
)


log_file = os.path.join(
    LOG_DIR,
    "haya.log"
)


logging.basicConfig(
    filename=log_file,
    level=logging.INFO,
    format=(
        "%(asctime)s - "
        "%(levelname)s - "
        "%(message)s"
    )
)


class HayaLogger:

    def info(self, message: str):

        logging.info(message)


    def error(self, message: str):

        logging.error(message)


    def warning(self, message: str):

        logging.warning(message)


    def system_status(self):

        return {
            "logger": "active",
            "time": datetime.utcnow()
        }


logger = HayaLogger()
