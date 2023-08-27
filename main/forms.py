from django import forms
from phonenumber_field.formfields import PhoneNumberField


class ContactForm(forms.Form):
    name = forms.CharField(label=False, max_length=255, widget=forms.TextInput(
        attrs={'placeholder': 'Name', 'style': 'width: 80%; margin: 0 auto; float: none;', 'class':
            'form-control mb-2'}))
    subject = forms.CharField(label=False, max_length=255, widget=forms.TextInput(
        attrs={'placeholder': 'Subject', 'style': 'width: 80%; margin: 0 auto; float: none;', 'class':
            'form-control mb-2'}))
    email = forms.EmailField(label=False, max_length=255, required=False,
                             widget=forms.TextInput(
        attrs={'placeholder': 'email Address', 'style': 'width: 80%; margin: 0 auto; float: none;',
               'class': 'form-control mb-2'}))
    phone = PhoneNumberField(region='AU', label=False, max_length=255,
                             required=False,
                             widget=forms.TextInput(
        attrs={'placeholder': 'Phone Number', 'style': 'width: 80%; margin: 0 '
                                                   'auto; float: none;',
               'class': 'form-control mb-2'}))
    message = forms.CharField(label=False, widget=forms.Textarea(
        attrs={'placeholder': 'Message', 'style': 'width: 80%; margin: 0 auto; float: none;', 'class':
            'form-control mb-2'}))

    def clean(self):
        email = self.cleaned_data.get('email')
        phone = self.cleaned_data.get('phone')
        if not email and not phone:
            raise forms.ValidationError('Please give me either an email '
                                        'address or a phone number so that I '
                                        'can get back to you.')
        return self.cleaned_data