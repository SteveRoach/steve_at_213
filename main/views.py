import logging

from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from django.http import HttpResponse
from .forms import ContactForm

from utils.logging import setup_logger

logger, log_level = setup_logger(__name__)


def main(request):
    if log_level <= logging.INFO:
        logger.info("START")

    if log_level <= logging.INFO:
        logger.info("END")
    return render(request, 'handyman.html')


def about(request):
    return render(request, 'about.html')


def contact(request):
    if log_level <= logging.INFO:
        logger.info("START")

    if log_level <= logging.DEBUG:
        logger.debug(f"request.method={request.method}")

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data['name']
            subject = form.cleaned_data['subject']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            message = form.cleaned_data['message']

            html = render_to_string('emails/contact_form.html', {
                'name': name,
                'subject': subject,
                'email': email,
                'phone': phone,
                'message': message,
            })

            send_mail(subject, "", settings.EMAIL_HOST_USER,
                      ["steve213nsw@gmail.com"], html_message=html)

            return redirect('/contact')
    else:
        form = ContactForm()

    if log_level <= logging.INFO:
        logger.info("END")

    return render(request, 'contact.html', {'form': form})
