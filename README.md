web-template-rest
===

This template provides simple way to wrap RESTful service as JavaScript API.

## Objects
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

## How to Use

* COPY, PASTE and RENAME to your service name.
* Rename keyword __subjects__ in the file to actual endpoint.

## What Different
### Before
```js
var apiURL = "http://localhost:8080/some-app/api/v1";

var xhr = new XMLHttpRequest();
xhr.open("GET", apiURL + "/subjects");
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var result = JSON.parse(xhr.responseText);
    // do something
}
xhr.send();
```
### After
```js
var apiURL = "http://localhost:8080/some-app/api/v1";

new TemplateWebService(apiURL).queryAll(
    (result) => {
        // do something
    });
```
