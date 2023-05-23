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
                log("value.title: " + value.title, "log", LOG_ERROR);
                log("value.image: " + value.image, "log", LOG_ERROR);

                jobs_grid += '<div class="col mx-auto card-width">';
                jobs_grid += '   <a href="#">';
                jobs_grid += '      <div class="card shadow-sm bg-handyman">';
                jobs_grid += '         <img class="card-img square-image" src="' + value.image + '">';
                jobs_grid += '         <div class="card-title card-img-overlay d-flex align-items-center justify-content-center">';
                jobs_grid += '            <button class="btn btn-secondary bg-secondary" style="--bs-bg-opacity: .7; width: fit-content; display: inline;">' + value.title + '</button>';
                jobs_grid += '         </div>';
                jobs_grid += '      </div>';
                jobs_grid += '   </a>';
                jobs_grid += '</div>';
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
