//采用koa-route模块
const koa = require('koa');
const app = new koa();
const route = require('koa-route');

const about = ctx => {
	ctx.response.type = 'html';
	ctx.response.body = '<a href="/">主页</a>';
}

const main = ctx => {
	ctx.response.body = '<a href="/about">关于</a>';
};

app.use(route.get('/',main));
app.use(route.get('/about',about));

app.listen(3000);