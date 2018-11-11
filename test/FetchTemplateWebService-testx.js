var tape = require("tape"),
    rest = require("../");

tape("rest.FetchTemplateWebService configurtion", function(test) {
    var endpoint = "http://localhost:8080/pms-web/api/v1/equips";
    var serv = new rest.FetchTemplateWebService(endpoint);
    test.equal(serv.url, endpoint);
    serv.queryAll()
        .then(function(result) {
            console.log(result[0]);
        });
    test.end();
});
