import { Service } from 'egg'

/**
 * BlogService Service
 */
export default class BlogService extends Service {
  /**
   * 根据主键查询一条数据
   * @param blog - blog info
   */
  async getBlogById(id) {
    console.log(id)
    // mysql 查询
    // const result = await this.app.mysql.select('blogs', {
    //   where: { id }
    // })
    const result = { title: '测试数据' }

    return { result }
  }

  /**
   * 查询列表
   * @param blog - blog info
   */
  async getBlog(params) {
    console.log(params)
    // mysql 分页查询
    // const result = await this.app.mysql.select('blogs', {
    //   limit: +params.pageSize, // 返回数据量
    //   offset: (+params.pageIndex - 1) * params.pageSize // 数据偏移量
    // })
    const result = [{ title: '测试数据1' }, { title: '测试数据2' }]

    return { result }
  }
}
