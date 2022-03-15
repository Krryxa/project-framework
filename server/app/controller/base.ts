import { Controller } from 'egg'

export class BaseController extends Controller {
  /**
   * @description: 定义响应格式、状态码
   * @param {*} data
   * @return {*}
   */
  success(data) {
    const { ctx, logger } = this
    try {
      // 设置唯一请求 ID。需要注册 egg-apigw-tracer 插件
      data.requestId = ctx.traceId
      if (data.result) {
        // 具体成功状态码由 controller 或 service 定义
        ctx.body = {
          code: 0,
          ...data
        }
      } else if (data.error) {
        // 具体失败状态码由 controller 或 service 定义
        ctx.body = {
          code: data.error.code,
          message: data.error.message,
          ...data
        }
      } else {
        ctx.body = {
          message: 'response format error',
          ...data
        }
        ctx.status = 500 // 设置格式错误状态码
      }
    } catch (err) {
      logger.error('[output response error]: %s', err)
      ctx.body = data
      ctx.status = 500 // 设置通用服务端错误状态码
    }
  }
}
