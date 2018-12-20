
// response返回 登录页面
var fn_index = async(ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
};

//  response返回登录结果
var fn_signin = async(ctx, next) => {
    var
    name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {


        const nunjucks = require('nunjucks');

        function createEnv(path, opts) {
            var
                autoescape = opts.autoescape === undefined ? true : opts.autoescape,
                noCache = opts.noCache || false,
                watch = opts.watch || false,
                throwOnUndefined = opts.throwOnUndefined || false,
                env = new nunjucks.Environment(
                    new nunjucks.FileSystemLoader('views', {
                        noCache: noCache,
                        watch: watch,
                    }), {
                        autoescape: autoescape,
                        throwOnUndefined: throwOnUndefined
                    });
            if (opts.filters) {
                for (var f in opts.filters) {
                    env.addFilter(f, opts.filters[f]);
                }
            }
            return env;
        }
        
        var env = createEnv('views', {
            watch: true,
            filters: {
                hex: function (n) {
                    return '0x' + n.toString(16);
                }
            }
        });
        
        var renderdata = {
             name: name ,
              fruits: ['apple', 'o', '1'], 
              header: '这是头部',
               body: '这是内容', 
               footer: '这是尾部'
            };

        var s = env.render('hello.html', renderdata);

        console.log(s);

        ctx.response.body = s;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
                            <p><a href="/">Try again</a></p>`;
    }
};

module.exports = {
    'GET /' : fn_index,
    'POST /signin/' :fn_signin
};