const koa = require('koa');
const app = new koa();

const text = ctx => {
	ctx.response.body = 'Hello world!';
};

app.use(text);
app.listen(3000);