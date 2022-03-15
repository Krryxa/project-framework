import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.resources('blog', '/blog', controller.blog.list)
  router.get('*', controller.home.index) // 放在最后配置，除上面所有路由，映射到 index.html
}
