// 处理/login事件
var login = async (ctx, next) => {
    ctx.render('index.html',  {
        title: 'Welcome'
    });
};

// 处理/signin事件
var signin = async (ctx, next) => {
    var
        username = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    if (username === 'admin' && password === '123456') {
        // 登录成功:
        ctx.render('signin-ok.html', {
            title: 'Sign In OK',
            name: username
        });
    } else {
        // 登录失败:
        ctx.render('signin-failed.html', {
            title: 'Sign In Failed',
            name: username
        });
    }
}

module.exports = {
    'GET /login': login,
    'POST /signin': signin,
};