$(document).ready(function(){
    console.log = function() {} // Comment this line to turn on logging

    console.group('contact.js - ready');

    var form_errors = $('.errorlist').length;

    console.log("form_errors: " + form_errors);

    contact_form_submitted = localStorage.getItem("contactFormSubmitted");

    console.log("contact_form_submitted: " + contact_form_submitted);

    if(contact_form_submitted == 'true' && form_errors == 0){
        console.group('submitted && form_errors = 0');

        $("#sentModal").modal('show');

        contact_form_submitted = 'false';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);

        console.groupEnd(); // Close the "submitted && form_errors = 0" group
    }

    $('form').submit(function(e)
    {
        console.group('on submit');

        // Stop submit
        e.preventDefault();

        contact_form_submitted = 'true';
        localStorage.setItem("contactFormSubmitted", contact_form_submitted);

        $('#submit-button').css("color", "black");
        $('#submit-button').css("background-color", "green");
        $('#submit-button').val("Sending...");
        $('#submit-button').prop('disabled', true);

        console.groupEnd(); // Close the "on submit" group

        alert('x');

        // Submit
        this.submit();
    });

    console.groupEnd(); // Close the "contact.js - ready" group
});
