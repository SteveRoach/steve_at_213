import logging
from django.shortcuts import render
from django.http import HttpResponse
from utils.logging import setup_logger

logger, log_level = setup_logger(__name__)


def special(request):
    if log_level <= logging.INFO:
        logger.info("START")

    if log_level <= logging.INFO:
        logger.info("END")
    return render(request, '404.html')


