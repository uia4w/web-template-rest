web-template-rest
===
[Chinese](README_TW.md)

## Description

This template provides simple way to wrap RESTful service as JavaScript API.

Keywords:
* rest
* template-rest

After cloning this template, you can test first.

1. Modify endpoint in `test/FetchTemplateWebService-testx.js`.
```js
var endpoint = "http://address:port/yourapp/api/subjectName"; // modify here
var serv = new rest.FetchTemplateWebService(endpoint);
serv.queryAll(result => console.log(result));
```

2. Make sure that __endpoint__ is a `GET` API without any parameters.

3. Test.
```
npm run testfetch
```

4. Build.
```js
npm run build
```
__template-rest.js__ and __template-rest.min.js__ are outputed  to __dist__ folder.

## How It Works
### Abstract Web Services of Fetch & XHR
All implement simple __GET/POST/PUT/DELETE__ methods.

#### FetchWebService.js
* Use __Fetch__ to send the request.
* Use __Promise__  to handle the response.

#### XHRWebService.js
* Use __XMLHttpRequest__ to send the request.
* Use __callback function__ to handle the response.


### Templates of Web Service
All templates provide default implementation of
* insert
* update
* delete
* queryAll
* queryOne

#### FetchTemplateWebService.js
* Extend from __FetchWebService__.

#### XHRTemplateWebService.js
* Extend from __XHRWebService__.


## Try It

### Rename for the Porject
#### rollup.config.js
```js
export default {
  output: {
    name: "rest"    // define namespace
  }
};
```
#### package.json
```js
{
  "name": "template-rest" // define output file name
}
```

### Create New Web Service
Suppose there is a web service about `user` information:
* COPY, PASTE one template and RENAME to __UserWebService__.
* Modify __this.url__ in the file to actual endpoint.
* Add new methods based on your API.
* Test.

### What Different
#### Before
```js
var apiURL = "http://localhost:8080/some-app/api/v1";
var xhr = new XMLHttpRequest();
xhr.open("GET", apiURL + "/users");  // nightmare if 'users' changed
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var result = JSON.parse(xhr.responseText);
    // do something
}
xhr.send();
```
#### After - XHR
```js
var apiURL = "http://localhost:8080/some-app/api/v1";
// 'users' appended in UserWebService
new UserWebService(apiURL).queryAll(
    (result) => {
        // do something
    });
```
#### After - Fetch
```js
var apiURL = "http://localhost:8080/some-app/api/v1";
// 'users' appended in UserWebService
new UserWebService(apiURL).queryAll()
    .then(result = > {
        // do something
    })
    .catch();
```

## Known Issues
* require("xmlhttprequest").XMLHttpRequest can not be used in the browser.

## Copyright and License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
