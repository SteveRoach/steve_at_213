// Set current debug level for the script - determines what is output to the
let debug_level = LOG_DEBUG;        // Levels defined in ~\steve_at_213\static\js\common.js

// Get the button:
let go_to_top_button = document.getElementById("go-to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {on_scroll()};

var job_name = "";
var job_article = "";

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

$(document).ready(function(){
    log("job.js", "group start", LOG_INFO);

    job_id = window.location.href.split('/').slice(-1);
    log("job_id: " + job_id, "log", LOG_INFO);

    $.ajax({
        url: "/handyman/get_job/" + job_id,
        method: 'GET',
        dataType: 'json',
        success: function(data){
            log("ajax|success", "group start", LOG_INFO);
            log("data: " + JSON.stringify(data.data), "log", LOG_DEBUG);
            log("job_name: " + data.data.job_name[0].title, "log", LOG_DEBUG);

            job_name += '<h2 class="text-center page-name">';
            job_name += data.data.job_name[0].title;
            job_name += '</h2>';

            $("#job-article").append(job_name);

            $.each(data.data.job, function(index, value){
                log("index: " + index, "log", LOG_DEBUG);
                log("value.type: " + value.type, "log", LOG_DEBUG);

                if(value.type == 'TEXT'){
                    job_article += '<div class="mb-3 job-article-text">';
                    job_article += value.text;
                    job_article += '</div>';
                } else if(value.type == 'IMAGE') {
                    job_article += '<div class="mb-3 text-center">';
                    job_article += '    <img class="job-article-image" style="max-width: ' + value.image_width + 'px;" src="' + value.image_url + '">';
                    job_article += '</div>';
                }
            });

            log("job_article: " + job_article, "log", LOG_ERROR);

            $("#job-article").append(job_article);

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

    log("job.js", "group end", LOG_INFO);
});
