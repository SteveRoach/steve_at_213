// Set current debug level for the script - determines what is output to the
let debug_level = LOG_DEBUG;        // Levels defined in ~\steve_at_213\static\js\common.js

var jobs_grid = "";

$(document).ready(function(){
    log("handyman.js", "group start", LOG_INFO);

    $.ajax({
        url: "/handyman/get_jobs_grid",
        method: 'GET',
        dataType: 'json',
        success: function(data){
            log("ajax|success", "group start", LOG_INFO);
            log("data: " + JSON.stringify(data.data), "log", LOG_DEBUG);

            $.each(data.data, function(index, value){
                log("value: " + value.title, "log", LOG_ERROR);

                jobs_grid += '<tr>';
                jobs_grid += '<td>' + value.title + '</td>';
                jobs_grid += '</tr>';
            });
            log("jobs_grid: " + jobs_grid, "log", LOG_ERROR);

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
