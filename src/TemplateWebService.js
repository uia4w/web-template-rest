import AbstractWebService from './AbstractWebService';

/**
 * Constructor.
 * @public
 * @param {string} webapi root url.
 */
var TemplateWebService = function(webapi) {
    this.url = webapi + "/subjects/";
};

/**
 */
TemplateWebService.prototype = new AbstractWebService();

/**
 * Insert.
 * @public
 * @param {object} data data transfer object to be inserted.
 * @param {function} handler callback handler.
 */
TemplateWebService.prototype.insert = function(data, handler) {
    this.jsonPost(this.url, data, handler)
}

/**
 * Update.
 * @public
 * @param {object} data data transfer object to be updated.
 * @param {function} handler callback handler.
 */
TemplateWebService.prototype.update = function(data, handler) {
    this.jsonPut(this.url, data, handler)
}

/**
 * Delete.
 * @public
 * @param {string} id Primary key.
 * @param {function} handler callback handler.
 */
TemplateWebService.prototype.delete = function(id, handler) {
    this.jsonDelete(this.url + id, null, handler)
}

/**
 * Query all.
 * @public
 * @param {function} handler callback handler.
 */
TemplateWebService.prototype.queryAll = function(handler) {
    this.jsonGet(this.url, handler);
}

/**
 * Query one.
 * @public
 * @param {string} id Primary key.
 * @param {function} handler callback handler.
 */
TemplateWebService.prototype.queryOne = function(id, handler) {
    this.jsonGet(this.url + id, null, handler)
}

export default TemplateWebService;
