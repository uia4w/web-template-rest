web-template-rest
===

## Description

This template provides simple way to wrap RESTful service as JavaScript API.

Keywords:
* template-rest

Before developing, you can test and build to verify this source code.

### Test
1. Modify endpoint in `test/TemplateWebService-test.js` before testing.
```js
var endpoint = "http://address:port/yourapp/api/subjectName";
var serv = new rest.TemplateWebService(endpoint);
serv.queryAll(result => console.log(result));
```

2. Make sure that RESTful API provides `GET` without any parameters.

3. Test.
```
npm run test
```

### Build
1. Build.
```js
npm run build
```

2. `template-rest.js` and `template-rest.min.js` are outputed  to `dist` folder.


## Templates
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

### How to Use
* COPY, PASTE and RENAME `TemplateWebService.js` to your service name.
* Modify __this.url__ in the file to actual endpoint.
* Add new methods based on API.

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
