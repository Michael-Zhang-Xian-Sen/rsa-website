var server = require("./server.js");
var router = require("./router.js");

var createPrime = require("./router/createPrime.js");

var handle = {};
handle["/prime"] = createPrime.prime;

server.start(router.route,handle);