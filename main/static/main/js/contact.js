
$(document).ready(function(){
    contact_form_submitted = localStorage.getItem("contactFormSubmitted");
    console.log(contact_form_submitted);

    if(contact_form_submitted == 'true'){
       console.log('submitted');

       $("#sendingModal").modal('hide');
       $("#sentModal").modal('show');

        contact_form_submitted = 'false';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);
    }

    $("form").on('submit', function(){
        contact_form_submitted = 'true';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);

       $("#sendingModal").modal('show');
    });
});
