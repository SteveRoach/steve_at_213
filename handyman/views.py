import logging
import json
from django.shortcuts import render
from django.http import HttpResponse
from . import sql
from utils.logging import setup_logger

logger, log_level = setup_logger(__name__)


def handyman(request):
    if log_level <= logging.INFO:
        logger.info("START")

    if log_level <= logging.INFO:
        logger.info("END")
    return render(request, 'handyman.html')


def get_jobs_grid(request):
    if log_level <= logging.INFO:
        logger.info("START")

    jobs_grid = sql.get_list_of_batches()

    if log_level <= logging.DEBUG:
        logger.debug(f"jobs_grid:")
        logger.debug(jobs_grid)

    response = "response"

    if log_level <= logging.INFO:
        logger.info("END")

    return HttpResponse(json.dumps(response), content_type='application/json')

