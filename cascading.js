/**
 * Created by common on 2017/6/29.
 */
const Koa = require('koa');
const app = new Koa();

//x-response-time
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

//logger
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url}-${ms}`);
});

//response
app.use(ctx => {
  ctx.body = 'Hello World';
});

//error handle
app.on('error', err => {
  log.error('server error', err);
});
app.listen(3000);