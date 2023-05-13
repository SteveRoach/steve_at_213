$(document).ready(function(){
    console.log("ready - START");

    var form_errors = $('.errorlist').length;

    console.log("ready - form_errors: " + form_errors);

    contact_form_submitted = localStorage.getItem("contactFormSubmitted");

    console.log("ready - contact_form_submitted: " + contact_form_submitted);

    if(contact_form_submitted == 'true' && form_errors == 0){
       console.log('ready - submitted && form_errors = 0: show sent');

       $("#sentModal").modal('show');

        contact_form_submitted = 'false';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);
    }

    $('form').on('submit', function(){
        contact_form_submitted = 'true';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);
    });

    console.log("ready - END");
});
