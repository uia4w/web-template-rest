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
import FetchWebService from './FetchWebService';

/**
 * Constructor.
 * @public
 * @param {string} webapi root url.
 */
var FetchTemplateWebService = function(webapi) {
    // modify to actual endpint, ex this.url = webapi + "/users/"
    this.url = webapi;
};

/**
 */
FetchTemplateWebService.prototype = new FetchWebService();

/**
 * Insert.
 * @public
 * @param {object} data data transfer object to be inserted.
 */
FetchTemplateWebService.prototype.insert = function(data) {
    return this.jsonPost(this.url, data);
}

/**
 * Insert.
 * @public
 * @param {object} data data transfer object to be updated.
 */
FetchTemplateWebService.prototype.update = function(data) {
    return this.jsonPut(this.url, data);
}

/**
 * Delete.
 * @public
 * @param {string} id Primary key.
 */
FetchTemplateWebService.prototype.delete = function(id) {
    return this.jsonDelete(this.url + id);
}

/**
 * Query all.
 * @public
 */
FetchTemplateWebService.prototype.queryAll = function() {
    return this.jsonGet(this.url);
}

/**
 * Query one.
 * @public
 * @param {string} id Primary key.
 */
FetchTemplateWebService.prototype.queryOne = function(id) {
    return this.jsonGet(this.url + id)
}

export default FetchTemplateWebService;
