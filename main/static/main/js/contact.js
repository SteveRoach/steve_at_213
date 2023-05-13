
$(document).ready(function(){
    contact_form_submitted = localStorage.getItem("contactFormSubmitted");
    console.log(contact_form_submitted);

    if(contact_form_submitted == 'true'){
       console.log('submitted');

       $("#sentModal").modal('show');

        contact_form_submitted = 'false';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);
    }

    $("form").on('submit', function(){
        contact_form_submitted = 'true';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);

        $("#submit-button").removeClass('btn-primary');
        $("#submit-button").addClass('btn-warning');
        $("#submit-button").val('Sending...');
    });
});
