from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from django.http import HttpResponse
from .forms import ContactForm


def main(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data['name']
            subject = form.cleaned_data['subject']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            print(message)

            html = render_to_string('emails/contact_form.html', {
                'name': name,
                'subject': subject,
                'email': email,
                'message': message,
            })

            print(html)

            send_mail("Subject", "Message", "noreply@gmail.com",
                      ["steve_at_213@gmail.com"], html_message=html)

            return redirect('/contact')
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})

