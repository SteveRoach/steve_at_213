// Globals

// Debug levels
var LOG_NONE = 0
var LOG_DEBUG = 10
var LOG_INFO = 20
var LOG_WARNING = 30
var LOG_ERROR = 40
var LOG_CRITICAL = 50

// Console log using levels
function log(message, type, level){
    if(level >= debug_level){
        if(type == "group start"){
            console.group(message);
        } else if(type == "log"){
            console.log(message);
        } else {
            console.groupEnd();
        }
    }
}

