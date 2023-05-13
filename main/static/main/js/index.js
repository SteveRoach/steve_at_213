// Get the button:
let go_to_top_button = document.getElementById("go-to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {on_scroll()};

function on_scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    go_to_top_button.style.display = "block";
  } else {
    go_to_top_button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function go_to_top() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//var contact_form_submitted = 'false';
//localStorage.setItem("contactFormSubmitted", contact_form_submitted);

//console.log(contact_form_submitted);
