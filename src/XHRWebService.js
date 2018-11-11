// use require
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// use import
// import XMLHttpRequest from 'xmlhttprequest';


/**
 * Constructor.
 */
var XHRWebService = function() {}

/**
 * Post.
 */
XHRWebService.prototype.jsonPost = function(apiUrl, requestData, responseCallback) {
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
    if (requestData) {
        xhr.send(JSON.stringify(requestData));
    } else {
        xhr.send();
    }
}

/**
 * Put.
 */
XHRWebService.prototype.jsonPut = function(apiUrl, requestData, responseCallback) {
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
    if (requestData) {
        xhr.send(JSON.stringify(requestData));
    } else {
        xhr.send();
    }
}


/**
 * Delete.
 */
XHRWebService.prototype.jsonDelete = function(apiUrl, requestData, responseCallback) {
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
    if (requestData) {
        xhr.send(JSON.stringify(requestData));
    } else {
        xhr.send();
    }
}

/**
 * Get.
 */
XHRWebService.prototype.jsonGet = function(apiUrl, responseCallback) {
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

export default XHRWebService;
