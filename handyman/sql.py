import logging
from django.db import connection
from utils.logging import setup_logger
from utils.database import *

logger, log_level = setup_logger(__name__)


def get_list_of_jobs() -> []:
    if log_level <= logging.INFO:
        logger.info("START")

    try:
        with connection.cursor() as cursor:
            cursor.execute(
                f"""
                SELECT id
                      ,title
                      ,image
                FROM handyman_job
                ORDER BY display_order
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


def get_job(job_id) -> []:
    if log_level <= logging.INFO:
        logger.info("START")

    try:
        with connection.cursor() as cursor:
            cursor.execute(
                f"""
                    SELECT jd.type
                          ,jd.text
                          ,jd.image_url
                          ,jd.image_width
                    FROM handyman_job j INNER JOIN handyman_jobdetail jd
                    ON(j.id = jd.job_id)
                    WHERE j.id = {job_id}
                    ORDER BY jd.number
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
