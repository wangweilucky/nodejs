
// 判断是否是生产环境
const isProduction = process.env.NODE_ENV === 'production';

// koa对象
const Koa = require('koa');
const app = new Koa();

// router函数
const router = require('koa-router')();

// body中json解析对象
const bodyParser = require('koa-bodyparser')();


// 引入render
const templating = require('./templating.js');

// 引入router
const controller = require('./controller.js');

// 引入静态文件
if (! isProduction) {
    let staticFiles = require('./static-files.js');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// 引入body解析功能
app.use(bodyParser);

// ctx加上render()来使用Nunjucks
app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}));

// 添加router
app.use(controller());



// 对于任何请求，app首先都将打印请求方法和链接
app.use(async (ctx, next) => {
    console.log(`Process： url -- ${ctx.request.href}...`);
    await next();
});

app.listen(3000);
console.log('app started at port 3000...');