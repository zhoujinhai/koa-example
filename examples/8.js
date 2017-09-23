//中间件级联替摒弃node中频繁的回调
const koa = require('koa');
const app = new koa();

//x-response-time
app.use(function *(next){
	const start = new Date;
	yield next;
	const ms = new Date - start;
	this.set('x-response-time',ms + 'ms');
});

//logger
app.use(function *(next){
	const start = new Date;
	yield next;
	const ms = new Date - start;
	console.log('%s %s -%s',this.method,this.url,ms);
});

//respone 
app.use(function *(){
	this.body = 'Hello world!';
});

app.listen(3000);