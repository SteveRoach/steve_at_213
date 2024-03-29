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

    jobs_grid = sql.get_list_of_jobs()

    if log_level <= logging.DEBUG:
        logger.debug(f"jobs_grid:")
        logger.debug(jobs_grid)

    response = {'data': jobs_grid}

    if log_level <= logging.DEBUG:
        logger.debug(f"output: {response}")

    if log_level <= logging.INFO:
        logger.info("END")

    return HttpResponse(json.dumps(response), content_type='application/json')


def job(request, job_id):
    if log_level <= logging.INFO:
        logger.info("START")

    if log_level <= logging.DEBUG:
        logger.debug(f"job_id: {job_id}")

    if log_level <= logging.INFO:
        logger.info("END")
    return render(request, 'job.html')


def get_job(request, job_id):
    if log_level <= logging.INFO:
        logger.info("START")

    job_name = sql.get_job_name(job_id)

    job = sql.get_job(job_id)

    if log_level <= logging.DEBUG:
        logger.debug(f"job:")
        logger.debug(job)

    data = {'job_name': job_name, 'job': job}
    response = {'data': data}

    if log_level <= logging.DEBUG:
        logger.debug(f"output: {response}")

    if log_level <= logging.INFO:
        logger.info("END")

    return HttpResponse(json.dumps(response), content_type='application/json')


