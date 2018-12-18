'use strict';

var http = require('http');

// 创建http server，并传入回调函数
var server = http.createServer(function(require, response) {
    // 请求的内容
    console.log(require.method + require.url);
    // 修改response
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>wangdaji , Hello world!</h1>');
});

// 让服务器监听8080端口
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');

