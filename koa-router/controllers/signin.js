
var fn_signin = async (ctx, next) => {
    var username = ctx.request.body.username || '';
    var password = ctx.request.body.password || '';

    if (username === 'wangdaji' && password === '123456') {
        ctx.render('signin-ok', {username: username});
    } else {
        ctx.render('signin-failed', {username: username});
    }
};