import request from '@/utils/request'

/** 数据源列表 */
export const getSources = (data: object) => {
  return request.get('/sources', data)
}

/** 数据源详情 */
export const getSourceDetail = (id: string) => {
  return request.get(`/sources/${id}`)
}
