var http = require("http");
var url = require("url");

// 启动服务器
function start(route,handle){
    // 写一个处理请求的函数。
    function onRequest(request,response){
        // 获取访问路径
        var pathName = url.parse(request.url).pathname;
        console.log("Request for"+pathName+" received");
        console.log("Request content is ",request.body);
        route(handle,pathname,response,request);
    }

    http.createServer(onRequest).listen(8002);
}

module.exports.start = start;