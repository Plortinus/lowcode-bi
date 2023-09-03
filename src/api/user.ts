import request from '@/utils/request'

/** 登录 */
export const getLogin = (data: object) => {
  return request.post('/users/login', data)
}
