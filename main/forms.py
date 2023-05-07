from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(label=False, max_length=255, widget=forms.TextInput(
        attrs={'placeholder': 'Name', 'style': 'width: 300px;', 'class': 'form-control'}))
    subject = forms.CharField(label=False, max_length=255, widget=forms.TextInput(
        attrs={'placeholder': 'Subject', 'style': 'width: 300px;', 'class':
            'form-control'}))
    email = forms.EmailField(label=False, max_length=255, widget=forms.TextInput(
        attrs={'placeholder': 'email Address', 'style': 'width: 300px;',
               'class': 'form-control'}))
    message = forms.CharField(label=False, widget=forms.Textarea(
        attrs={'placeholder': 'Message', 'style': 'width: 300px;', 'class':
            'form-control'}))
