import axios from '@/utils/request'

/** 登录 */
export const getLogin = (data: object) => {
  return axios.post('/users/login', data)
}
