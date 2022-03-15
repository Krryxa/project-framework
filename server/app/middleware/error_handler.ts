export default () => {
  return async function errorHandler(ctx, next) {
    try {
      await next()
    } catch (err: any) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx)

      const status = err.status || 500
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error =
        status === 500 && ctx.app.config.env === 'prod'
          ? 'Internal Server Error'
          : err.message

      // 根据上面定义好的 RESTful API 风格，设置到响应中
      ctx.body = {
        code: status,
        message: error,
        requestId: ctx.traceId
      }
      // 针对 422 参数校验错误，返回具体字段校验信息
      if (status === 422) {
        ctx.body.errors = err.errors
      }
      // 设置状态码
      ctx.status = status
    }
  }
}
