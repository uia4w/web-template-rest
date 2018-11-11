var tape = require("tape"),
    rest = require("../");

tape("rest.XHRTemplateWebService configurtion", function(test) {
    var endpoint = "http://localhost:8080/pms-web/api/v1/equips";
    var serv = new rest.XHRTemplateWebService(endpoint);
    test.equal(serv.url, endpoint);
	serv.queryAll(result => console.log(result[0]));
    test.end();
});
