web-template-rest
===

## 說明

本樣板提供一簡單方式將 RESTful 服務包裝成 JavaScript 函式庫。

關鍵字：
* rest
* template-rest

複製樣板後，你可以先進行簡單的測試。

1. 更改檔案 `test/FetchTemplateWebService-testx.js` 內的 enpoint 變數。
```js
var endpoint = "http://address:port/yourapp/api/subjectName"; // modify here
var serv = new rest.FetchTemplateWebService(endpoint);
serv.queryAll(result => console.log(result));
```

2. 確認 __endpoint__ 是一個不帶參數 `GET` 形式的 API。

3. 測試。
```
npm run testfetch
```

4. 編譯。
```js
npm run build
```
資料夾  __dist__ 中會產生 __template-rest.js__ 和 __template-rest.min.js__ 檔案。


## 如何工作
### Fetch & XHR Web Service 抽象類
抽象類實作簡化的 __GET/POST/PUT/DELETE__ 方法。

#### FetchWebService.js
* 使用 __Fetch__ 發送請求。
* 使用 __Promise__  處理回應。

#### XHRWebService.js
* 使用 __XMLHttpRequest__ 發送請求。
* 使用 __callback function__ 處理回應。


### Web Service 樣板
樣板提供預設實作：
* insert
* update
* delete
* queryAll
* queryOne

#### FetchTemplateWebService.js
* 繼承自 __FetchWebService__。

#### XHRTemplateWebService.js
* 繼承自 __XHRWebService__。

## 試試看

### 為專案更名
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

### 建立新的 Web Service
假設有一個關於 `user` 資訊的 Web Service：
* 複製、貼上任一樣板並更名為服務的名稱。
* 將檔案中的 __this.url__ 更改為有效的 API 位置。
* 根據 API 增加新的方法。
* 測試。

### 有什麼不同
#### 包裝前
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
#### 包裝後 - XHR
```js
var apiURL = "http://localhost:8080/some-app/api/v1";
// 'users' appended in UserWebService
new UserWebService(apiURL).queryAll(
    (result) => {
        // do something
    });
```
### 包裝後 - Fetch
```js
var apiURL = "http://localhost:8080/some-app/api/v1";
// 'users' appended in UserWebService
new UserWebService(apiURL).queryAll()
    .then(result = > {
        // do something
    })
    .catch();
```

## 已知問題
* require("xmlhttprequest").XMLHttpRequest 不能在 Browser 端使用。

    臨時措施為編譯完成後，將 __dist/{PROJECT_NAME}.js__ 內的 require("xmlhttprequest").XMLHttpRequest 註記或刪除。

## 版權說明

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
