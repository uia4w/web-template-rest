var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 * Constructor.
 */
var AbstractWebService = function() {}

/**
 * Post.
 */
AbstractWebService.prototype.jsonPost = function(apiUrl, apiRequest, responseCallback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader('Content-type', 'application/json; cruns=utf-8');
    xhr.onload = function() {
        if (responseCallback) {
            if (xhr.responseText) {
                responseCallback(JSON.parse(xhr.responseText));
            } else {
                responseCallback(null);
            }
        }
    }
    if (apiRequest) {
        xhr.send(JSON.stringify(apiRequest));
    } else {
        xhr.send();
    }
}

/**
 * Put.
 */
AbstractWebService.prototype.jsonPut = function(apiUrl, apiRequest, responseCallback) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", apiUrl, true);
    xhr.setRequestHeader('Content-type', 'application/json; cruns=utf-8');
    xhr.onload = function() {
        if (responseCallback) {
            if (xhr.responseText) {
                responseCallback(JSON.parse(xhr.responseText));
            } else {
                responseCallback(null);
            }
        }
    }
    if (apiRequest) {
        xhr.send(JSON.stringify(apiRequest));
    } else {
        xhr.send();
    }
}


/**
 * Delete.
 */
AbstractWebService.prototype.jsonDelete = function(apiUrl, apiRequest, responseCallback) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", apiUrl, true);
    xhr.setRequestHeader('Content-type', 'application/json; cruns=utf-8');
    xhr.onload = function() {
        if (responseCallback) {
            if (xhr.responseText) {
                responseCallback(JSON.parse(xhr.responseText));
            } else {
                responseCallback(null);
            }
        }
    }
    if (apiRequest) {
        xhr.send(JSON.stringify(apiRequest));
    } else {
        xhr.send();
    }
}

/**
 * Get.
 */
AbstractWebService.prototype.jsonGet = function(apiUrl, responseCallback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    xhr.setRequestHeader('Content-type', 'application/json; cruns=utf-8');
    xhr.onload = function() {
        if (responseCallback) {
            if (xhr.responseText) {
                responseCallback(JSON.parse(xhr.responseText));
            } else {
                responseCallback(null);
            }
        }
    }
    xhr.send();
}

export default AbstractWebService;
