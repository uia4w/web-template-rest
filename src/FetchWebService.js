// use require
// var fetch = require("node-fetch");

// use import
import fetch from 'node-fetch';


/**
 * Constructor.
 */
var FetchWebService = function() {}

/**
 * Post.
 */
FetchWebService.prototype.jsonPost = function(apiUrl, data) {
    var request = {
        "method": "POST",
        "cache": "no-cache",
        "headers": {
            "content-type": "application/json; cruns=utf-8"
        }
    };
    if(data) {
        request.body = JSON.stringify(data);
    }
    return fetch(apiUrl, request)
        .then(function(response) {
            if (response.status === 200 || response.status === 0) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
}

/**
 * Put.
 */
FetchWebService.prototype.jsonPut = function(apiUrl, data) {
    var request = {
        "method": "PUT",
        "cache": "no-cache",
        "headers": {
            "content-type": "application/json; cruns=utf-8"
        }
    };
    if(data) {
        request.body = JSON.stringify(data);
    }
    return fetch(apiUrl, request)
        .then(function(response) {
            if (response.status === 200 || response.status === 0) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
}


/**
 * Delete.
 */
FetchWebService.prototype.jsonDelete = function(apiUrl, data) {
    var request = {
        "method": "DELETE",
        "cache": "no-cache",
        "headers": {
            "content-type": "application/json; cruns=utf-8"
        }
    };
    if(data) {
        request.body = JSON.stringify(data);
    }
    return fetch(apiUrl, request)
        .then(function(response) {
            if (response.status === 200 || response.status === 0) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
}

/**
 * Get.
 */
FetchWebService.prototype.jsonGet = function(apiUrl) {
    var request = {
        "method": "GET",
        "cache": "no-cache",
        "headers": {
            "content-type": "application/json; cruns=utf-8"
        }
    };
    return fetch(apiUrl, request)
        .then(function(response) {
            if (response.status === 200 || response.status === 0) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
}

export default FetchWebService;
