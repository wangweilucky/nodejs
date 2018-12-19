// koa对象
const Koa = require('koa');
const app = new Koa();

// router函数
const router = require('koa-router')();

// body中json解析对象
const bodyParser = require('koa-bodyparser')();

// 0. 添加body解析功能，post请求
app.use(bodyParser);

// 1. 打印请求的数据连接
app.use(async (ctx, next) => {
    console.log(`url: ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

// 2. 添加 url-router, 并生成所有的导入controller middleware:
const controller = require('./router.js');

// 3. 添加router
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');