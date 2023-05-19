import logging
from django.db import connection
from utils.logging import setup_logger
from utils.database import *

logger, log_level = setup_logger(__name__)


def get_list_of_batches() -> []:
    if log_level <= logging.INFO:
        logger.info("START")

    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT title 
                FROM handyman_job
                """
            )

            data = fetchall_into_dict(cursor)

    except ConnectionError as e:
        if log_level <= logging.ERROR:
            logger.error(f"e: {e}")

    if log_level <= logging.DEBUG:
        logger.debug(f"data:")
        logger.debug(data)

    if log_level <= logging.INFO:
        logger.info("END")

    return data
