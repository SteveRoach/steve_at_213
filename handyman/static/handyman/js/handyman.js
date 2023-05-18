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
            log("data: " + JSON.stringify(data), "log", LOG_DEBUG);

            $.each(data.data, function(index, value){
                log("index: " + index, LOG_ERROR);
                log("value.col1_id: " + value.col1_id, LOG_ERROR);
                log("value.col1_name: " + value.col1_name, LOG_ERROR);
                log("value.col5_id: " + value.col5_id, LOG_ERROR);
                log("value.col5_name: " + value.col5_name, LOG_ERROR);

                jobs_grid += '<tr>';
                jobs_grid += '<td><button type="button" class="btn btn-light" onclick="return grid_click(\'' + value.col1_id + '\')"><span class="d-flex align-items-center justify-content-center">' + value.col1_name + '</span></button></td>';
                jobs_grid += '</tr>';
            });

            jobs_grid += '<tr><th></th></tr>';

            log("jobs_grid: " + jobs_grid, LOG_ERROR);

            $("#grid_table").append(jobs_grid);

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
