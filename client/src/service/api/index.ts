import Ax from '../axios'

/**
 * 获取博客列表
 * @param {*} reqData
 */
export function getBlog(reqData: any) {
  return Ax.get('/blog/getBlog', { params: reqData })
}
