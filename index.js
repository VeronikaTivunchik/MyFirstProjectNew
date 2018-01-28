var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/day1"] = requestHandlers.day1;
handle["/month1"] = requestHandlers.month1;
handle["/day2"] = requestHandlers.day2;
handle["/month2"] = requestHandlers.month2;

server.start(router.route, handle);