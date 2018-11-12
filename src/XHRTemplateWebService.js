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
import XHRWebService from './XHRWebService';

/**
 * Constructor.
 * @public
 * @param {string} webapi root url.
 */
var XHRTemplateWebService = function(webapi) {
    // modify to actual endpint, ex this.url = webapi + "/users/"
    this.url = webapi;
};

/**
 */
XHRTemplateWebService.prototype = new XHRWebService();

/**
 * Insert.
 * @public
 * @param {object} data data transfer object to be inserted.
 * @param {function} handler callback handler.
 */
XHRTemplateWebService.prototype.insert = function(data, handler) {
    this.jsonPost(this.url, data, handler)
}

/**
 * Update.
 * @public
 * @param {object} data data transfer object to be updated.
 * @param {function} handler callback handler.
 */
XHRTemplateWebService.prototype.update = function(data, handler) {
    this.jsonPut(this.url, data, handler)
}

/**
 * Delete.
 * @public
 * @param {string} id Primary key.
 * @param {function} handler callback handler.
 */
XHRTemplateWebService.prototype.delete = function(id, handler) {
    this.jsonDelete(this.url + id, null, handler)
}

/**
 * Query all.
 * @public
 * @param {function} handler callback handler.
 */
XHRTemplateWebService.prototype.queryAll = function(handler) {
    this.jsonGet(this.url, handler);
}

/**
 * Query one.
 * @public
 * @param {string} id Primary key.
 * @param {function} handler callback handler.
 */
XHRTemplateWebService.prototype.queryOne = function(id, handler) {
    this.jsonGet(this.url + id, null, handler)
}

export default XHRTemplateWebService;
