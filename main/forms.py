from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(label=False, max_length=255, widget=forms.TextInput(
        attrs={'placeholder': 'Name', 'style': 'width: 80%; margin: 0 auto; float: none;', 'class':
            'form-control mb-2'}))
    subject = forms.CharField(label=False, max_length=255, widget=forms.TextInput(
        attrs={'placeholder': 'Subject', 'style': 'width: 80%; margin: 0 auto; float: none;', 'class':
            'form-control mb-2'}))
    email = forms.EmailField(label=False, max_length=255, widget=forms.TextInput(
        attrs={'placeholder': 'email Address', 'style': 'width: 80%; margin: 0 auto; float: none;',
               'class': 'form-control mb-2'}))
    message = forms.CharField(label=False, widget=forms.Textarea(
        attrs={'placeholder': 'Message', 'style': 'width: 80%; margin: 0 auto; float: none;', 'class':
            'form-control mb-2'}))
