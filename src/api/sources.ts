import request from '@/utils/request'

/** 登录 */
export const getSources = (data: object) => {
  return request.get('/sources', data)
}
