var tape = require("tape"),
    jsdom = require("jsdom"),
    rest = require("../TemplateWebService");

tape("rest.TemplateWebService configurtion", function(test) {
    var serv = new rest.TemplateWebService("http://localhost:8080/somewhere/api/v1");
    test.end();
});
