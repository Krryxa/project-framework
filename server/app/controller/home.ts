import { Controller } from 'egg'

export default class HomeController extends Controller {
  async index() {
    const { ctx } = this
    await ctx.render('index.html')
  }
}
