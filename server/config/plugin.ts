import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  // static: true,

  // 参数校验
  validate: {
    enable: true,
    package: 'egg-validate'
  },

  // 生成 requestId
  tracer: {
    enable: true,
    package: 'egg-apigw-tracer'
  },

  // view 模板渲染
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  }
}

export default plugin
