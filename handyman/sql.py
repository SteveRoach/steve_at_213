import logging
from django.db import connection
from utils.logging import setup_logger

logger, log_level = setup_logger(__name__)


def get_list_of_batches() -> []:
    if log_level <= logging.INFO:
        logger.info("START")

    if log_level <= logging.INFO:
        logger.info("END")

    return ["X-X"]
