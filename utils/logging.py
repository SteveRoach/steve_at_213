import logging
from config import fine_grained_logging


def setup_logger(name):
    logger = logging.getLogger(name)

    log_level = logger.level

    # print(f"name: {name}")
    if name in fine_grained_logging.PER_MODULE_LOG_LEVELS:
        log_level = fine_grained_logging.PER_MODULE_LOG_LEVELS[name]

    # print(f"log_level: {log_level}")

    return logger, log_level

