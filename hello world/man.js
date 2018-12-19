"use strict";

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    sayHelow(name) {
        var helloTalk = require('./hello');
        console.log(`${this.name} say: \" ${name} ${helloTalk} !\" `);
    }
}

var man = new Person('wangdaji');
man.sayHelow('rock');

// 在下一个事件响应中执行的函数
process.nextTick(function() {
    console.log("heihei2");
});

// 在程序即将结束的时候执行
process.on('exit', function() {
    console.log("end");
});

var fs = require('fs');
// 读文件状态
fs.stat('mmap.md', function(err, stat){
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

// 异步读取文件
fs.readFile('mmap.md', 'utf-8', function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

// 异步写文件
fs.writeFile('wangdaji.txt', 'hello world! ', function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('成功写入到wangdaji.txt中');
    }
});

// 响应式，读文件流(异步的)
var rs = fs.createReadStream('mmap.md', 'utf-8');// 打开一个流
rs.on('data', function(chunk) {
    console.log( 'rs.on' + 'data: ' + chunk);
});
rs.on('end', function(){
    console.log('rs.on - end');
});

// 写文件流
var ws = fs.createWriteStream('wangdaji.txt', 'utf-8');
ws.write('wangdaji的text文件', function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('文件流写入成功');
    }
});

console.log("heihei1");
