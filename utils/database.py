import logging
from utils.logging import setup_logger

logger, log_level = setup_logger(__name__)


def fetchall_into_dict(cursor) -> []:
    """
    Return all rows from a cursor as a dict.

    Parameters:
        cursor (?): The cursor to be traversed.

    Returns:
        array ([]): An array of dicts.
    """

    if log_level <= logging.INFO:
        logger.debug("START")

    columns = [col[0] for col in cursor.description]

    if log_level <= logging.INFO:
        logger.debug("END")

    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]
