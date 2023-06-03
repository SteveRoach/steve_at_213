// Set current debug level for the script - determines what is output to the
let debug_level = LOG_DEBUG;        // Levels defined in ~\steve_at_213\static\js\common.js

// Get the button:
let go_to_top_button = document.getElementById("go-to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {on_scroll()};

window.onpageshow = function(event) {
    log("onpageshow", "group start", LOG_INFO);

    if( $.browser.safari )
    {
        alert('safari');

        if (event.persisted) {
            //window.location.reload();

            $(".opaque-overlay").removeClass("opacity-0");
            $(".opaque-overlay").addClass("opacity-50");
        }
    }

    log("onpageshow", "group end", LOG_INFO);
};

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

$(document).ready(function() {
    log("$(document).ready", "group start", LOG_INFO);

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


var output = 'Detecting browsers by ducktyping:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isEdgeChromium: ' + isEdgeChromium + '<br>';
output += 'isBlink: ' + isBlink + '<br>';
document.body.innerHTML = output;

    $("a").click(function() {
        log("a click", "group start", LOG_INFO);

        var id = this.id;

        log("id: " + id, "group start", LOG_INFO);

        $("#" + id + " div").removeClass("opacity-50");
        $("#" + id + " div").addClass("opacity-0");

        window.location.href = id;

        log("a click", "group end", LOG_INFO);
    });

    log("$(document).ready", "group end", LOG_INFO);
});


