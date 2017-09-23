const koa = require('koa');
const app = new koa();

const koaBody = require('koa-body');

const main = async function(ctx){
	const body = ctx.request.body;
	if(!body.name){
		ctx.throw(400,'name required');
	}
	ctx.body = {name: body.name};
}

app.use(koaBody());

app.listen(3000);