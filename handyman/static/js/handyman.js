// Set current debug level for the script - determines what is output to the
let debug_level = LOG_DEBUG;        // Levels defined in ~\steve_at_213\static\js\common.js

// Get the button:
let go_to_top_button = document.getElementById("go-to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {on_scroll()};

var jobs_grid = "";
var title = "";

/* Cludge:
    Fixes an issue with Safari. When the back-button is clicked, classes are not
    restored properly. This is the least intrusive approach. The commented-out reload
    instruction is the hammer. */
window.onpageshow = function(event) {
    log("onpageshow", "group start", LOG_INFO);

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    log("isSafari: " + isSafari, "log", LOG_INFO);

    if(isSafari)
    {
        log("Safari", "log", LOG_INFO);

        if (event.persisted) {
            //window.location.reload();

            $(".opaque-overlay").removeClass("opacity-0");
            $(".opaque-overlay").addClass("opacity-50");
        }
    }

    log("onpageshow", "group end", LOG_INFO);
};

function on_scroll() {
    log("on_scroll", "group start", LOG_INFO);

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        go_to_top_button.style.display = "block";
    } else {
        go_to_top_button.style.display = "none";
    }

    log("on_scroll", "group end", LOG_INFO);
}

// When the user clicks on the button, scroll to the top of the document
function go_to_top() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function runAnchor(id) {
    log("a click", "group start", LOG_INFO);
    log("id: " + id, "log", LOG_INFO);

    $("#" + id + " div").removeClass("opacity-50");
    $("#" + id + " div").addClass("opacity-0");

    window.location.href = "job/" + id;

    log("a click", "group end", LOG_INFO);

    return false;
};

$(document).ready(function(){
    log("handyman.js", "group start", LOG_INFO);

    $.ajax({
        url: "/handyman/get_jobs_grid",
        method: 'GET',
        dataType: 'json',
        success: function(data){
            log("ajax|success", "group start", LOG_INFO);
            //log("data: " + JSON.stringify(data.data), "log", LOG_DEBUG);

            $.each(data.data, function(index, value){
                title = value.title.replace(/\s+/g, '<br>');

                //log("value.id: " + value.id, "log", LOG_DEBUG);
                //log("title: " + title, "log", LOG_DEBUG);
                //log("value.image: " + value.image, "log", LOG_DEBUG);

                jobs_grid += '<div class="col mx-auto card-width">';
                jobs_grid += '    <div class="card shadow-sm bg-handyman">';
                jobs_grid += '        <img class="card-img square-image" src="' + value.image + '">';
                jobs_grid += '        <div class="card-title card-img-overlay text-center">';
                jobs_grid += '            <div class="card-text-wrap d-flex h-100">';
                jobs_grid += '                <h4 class="align-self-center w-100">' + title + '</h4>';
                jobs_grid += '            </div>';
                jobs_grid += '        </div>';
                jobs_grid += '        <div class="card-title card-img-overlay text-center">';
                jobs_grid += '            <a href="#" onclick="return runAnchor(' + value.id + ');" >';
                jobs_grid += '                <div class="card-text-wrap bg-secondary d-flex h-100 opaque-overlay opacity-50">';
                jobs_grid += '                    <h4 class="align-self-center w-100">' + title + '</h4>';
                jobs_grid += '                </div>';
                jobs_grid += '            </a>';
                jobs_grid += '        </div>';
                jobs_grid += '    </div>';
                jobs_grid += '</div>';
            });

            //log("jobs_grid: " + jobs_grid, "log", LOG_DEBUG);

            $("#jobs-grid").append(jobs_grid);

            log("ajax|success", "group end", LOG_INFO);
        },
        error: function(xhr, ajaxOptions, thrownError){
            log("ajax|error", "group start", LOG_INFO);
            log("xhr: " + JSON.stringify(xhr), "log", LOG_DEBUG);
            log("ajaxOptions: " + JSON.stringify(ajaxOptions), "log", LOG_DEBUG);
            log("thrownError: " + JSON.stringify(thrownError), "log", LOG_DEBUG);
            log("ajax|success", "group end", LOG_INFO);
        }
    });

    log("handyman.js", "group end", LOG_INFO);
});

