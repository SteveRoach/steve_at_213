// Set current debug level for the script - determines what is output to the
let debug_level = LOG_DEBUG;        // Levels defined in ~\steve_at_213\static\js\common.js

var job_article = "";

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

            $.each(data.data, function(index, value){
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
