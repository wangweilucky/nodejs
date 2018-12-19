// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:

const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(async (ctx, next) => {
    
    console.log('第一1');
    await next();
    console.log('第一2');
});

app.use(async (ctx, next) => {
    console.log('第二1');
    await next();
    console.log('第二2');
});

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    console.log('第三1'  + ctx.request.URL);
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
    console.log('第三2' );
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');