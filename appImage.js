'use strict';

var 
    http = require('http'), 
    fs   = require('fs'),
    url  = require('url'),
    path = require('path');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// 创建服务器：
var server = http.createServer(function(request, response) {
    
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);

    console.log('filepath: ' + filepath);

    // 文件状态
    fs.stat(filepath, function (err, stats) {

        if (!err && stats.isFile()) {

            fs.readFile(filepath,'binary',function(err,  file)  {
                if  (err)  {
                    console.log(err);
                    return;
                }else{
                    console.log("图片文件：" + file);
                    response.writeHead(200,  {'Content-Type':'image/jpeg'});
                    response.write(file,'binary');
                    response.end();
                }
            });
            
        } else {
            // 出错了或者文件不存在
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

// 让服务器监听8080端口
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');