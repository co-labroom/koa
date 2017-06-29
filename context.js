/**
 * Created by common on 2017/6/29.
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  // console.log(ctx.request);
  // console.log(ctx.response);
  ctx.body = 'Hello World';
  console.log(ctx.res);
});

app.listen(3000);