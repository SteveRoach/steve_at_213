import logging

block = 1

# Fine Grained
if block == 1:
    # All ERROR
    PER_MODULE_LOG_LEVELS = {
        'main.views':                                                       logging.ERROR,
    }
elif block == 2:
    # All DEBUG
    PER_MODULE_LOG_LEVELS = {
        'main.views':                                                       logging.DEBUG,
    }
