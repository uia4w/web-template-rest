var tape = require("tape"),
    rest = require("../");

tape("rest.TemplateWebService configurtion", function(test) {
    var endpoint = "http://localhost:8080/uia-pie-web/api/v1/equips";
    var serv = new rest.TemplateWebService(endpoint);
    test.equal(serv.url, endpoint);
	serv.queryAll(result => console.log(result));
    test.end();
});
