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
