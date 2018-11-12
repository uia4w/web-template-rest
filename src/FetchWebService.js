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
import fetch from 'node-fetch';
// var fetch = require("node-fetch");

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
