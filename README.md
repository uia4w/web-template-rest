web-template-rest
===

This template provides simple way to wrap RESTful service as JavaScript API.

### AbstractWebService.js
Implement __GET/POST/PUT/DELETE__ simply.

All implementation of RESTful services can extends from this object.

### TemplateWebService.js
The template of RESTful service provides default implementation of
* insert
* update
* delete
* queryAll
* queryOne

#### How to Use

* COPY, PASTE and RENAME to your service name.
* Rename keyword __subjects__ in the file to actual endpoint.
