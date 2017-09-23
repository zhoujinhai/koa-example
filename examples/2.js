//根据请求格式返回数据
const koa = require('koa');
const app = new koa();

const text = ctx => {
	if(ctx.request.accepts('xml')){
		ctx.response.type = 'xml';
		ctx.response.body = '<data>Hello world!</data>';
	}else if(ctx.request.accepts('json')){
		ctx.response.type = 'json';
		ctx.response.body = {data: 'Hello world!'};
	}else if(ctx.request.accepts('html')){
		ctx.response.type = 'html';
		ctx.response.body = '<h1>Hello world!</h1>';
	}else{
		ctx.response.type = 'text';
		ctx.response.body = 'Hello world!';
	}
};

app.use(text);
app.listen(3000);
