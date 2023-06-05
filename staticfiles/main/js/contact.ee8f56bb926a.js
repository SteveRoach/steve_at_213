// Set current debug level for the script - determines what is output to the
let debug_level = LOG_DEBUG;        // Levels defined in ~\steve_at_213\static\js\common.js

$(document).ready(function(){
    log("contact.js", "group start", LOG_INFO);

    var form_errors = $('.errorlist').length;

    log("form_errors: " + form_errors, "log", LOG_DEBUG);

    contact_form_submitted = localStorage.getItem("contactFormSubmitted");

    log("contact_form_submitted: " + contact_form_submitted, "log", LOG_DEBUG);

    if(contact_form_submitted == 'true' && form_errors == 0){
        log('submitted && form_errors = 0', "group start", LOG_DEBUG);

        $("#sentModal").modal('show');

        contact_form_submitted = 'false';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);

        log('submitted && form_errors = 0', "group end", LOG_DEBUG);
    }

    $('form').submit(function(e)
    {
        log('on submit', "group start", LOG_DEBUG);

        // Stop submit
        e.preventDefault();

        contact_form_submitted = 'true';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);

        $('#submit-button').css("color", "black");
        $('#submit-button').css("background-color", "green");
        $('#submit-button').val("Sending...");
        $('#submit-button').prop('disabled', true);

        log('on submit', "group end", LOG_DEBUG);

        // Submit
        this.submit();
    });

    log("contact.js", "group end", LOG_INFO);
});
