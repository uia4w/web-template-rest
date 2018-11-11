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
