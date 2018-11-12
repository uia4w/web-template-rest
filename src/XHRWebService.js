/*******************************************************************************
 * Copyright 2018 UIA
 *
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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
