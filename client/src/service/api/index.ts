import Ax from '../axios'

/**
 * 获取博客列表
 * @param {*} reqData
 */
export function getBlog(reqData: any) {
  return Ax.get('/blog', { params: reqData })
}

/**
 * 获取博客详情
 * @param {*} reqData
 */
export function getBlogById(id: number) {
  return Ax.get(`/blog/${id}`)
}
