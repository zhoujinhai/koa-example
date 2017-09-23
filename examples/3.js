//原生路由
const koa = require('koa');
const app = new koa();

const text = ctx => {
	if(ctx.request.path !== '/'){
		ctx.response.type = 'html';
		ctx.response.body = '<a href="/">主页</a>';
	}else{
		ctx.response.body = 'Hello world!';
	}
}

app.use(text);
app.listen(3000);